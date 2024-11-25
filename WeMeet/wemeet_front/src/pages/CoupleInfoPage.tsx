import React, {useRef, useState} from 'react';
import {Box, Grid, Typography, IconButton, Button, Container} from '@mui/material/';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import TextField from "@mui/material/TextField";
import {useCoupleInfo} from "../hooks/useCoupleInfo";
import {useNavigate} from "react-router-dom";
import SendIcon from "@mui/icons-material/Send";
import useUserInfo from '../hooks/useUserInfo';
import Paper from "@mui/material/Paper";
import secInstance from "../utils/secInstance";
import {useDispatch} from "react-redux";
import {openSnackbar} from "../redux/snackbarSlice";
import {AxiosResponse} from 'axios';
import {CoupleInfo} from "../redux/coupleInfoSlice";

function dDayCount(coupleDate: Date): number {
    // 사귀기 시작한 날짜
    const date: Date = new Date(coupleDate);
    // 현재 날짜
    const currentDate: Date = new Date();
    // 날짜 차이 계산 (밀리초 단위)
    const timeDifference: number = currentDate.getTime() - date.getTime();
    // 밀리초를 일수로 변환
    return Math.floor(timeDifference / (1000 * 60 * 60 * 24));
}


// 2. 설정 화면 상단부로 커플일 땐 상세 정보를, 솔로일 땐 커플 등록하는 화면을 보여줌
export function SummaryTab({coupleInfo, tab, setTab}: {
    coupleInfo: CoupleInfo,
    tab: string,
    setTab: (tab: string) => void
}) {
    const navigate = useNavigate();
    const inputRef = useRef<HTMLInputElement>(null);
    const [anniversary, setAnniversary] = useState("");
    const dispatch = useDispatch();
    const {fetchCoupleInfo} = useCoupleInfo();

    const handleAnniversaryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        let input = event.target.value;

        // 숫자 외의 모든 문자 제거 (하지만 setBirth 후 -는 다시 추가되므로 문제가 발생하지 않음)
        input = input.replace(/[^0-9]/g, "");

        // 최대 8자리까지만 허용 (YYYYMMDD)
        if (input.length > 8) {
            input = input.slice(0, 8);
        }

        let formattedInput = input;

        // 입력된 값이 5자리 이상일 경우 YYYY-MM-DD 포맷 적용
        if (input.length >= 6) {
            formattedInput = `${input.slice(0, 4)}-${input.slice(4, 6)}-${input.slice(6, 8)}`;
        } else if (input.length >= 4) {
            formattedInput = `${input.slice(0, 4)}-${input.slice(4, 6)}`;
        }

        setAnniversary(formattedInput); // 상태 업데이트
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (!inputRef.current) return;

        const cursorPosition = inputRef.current.selectionStart; // selectionStart 가져오기

        if (cursorPosition === null) return;

        // 백스페이스 처리 로직 추가
        if (event.key === "Backspace") {
            const currentValue = inputRef.current.value;
            // 예: 2000-04-23에서 "-" 뒤의 숫자와 "-"를 함께 삭제하는 로직 추가
            if (currentValue[cursorPosition - 1] === "-") {
                event.preventDefault(); // 기본 동작 방지
                const newValue = currentValue.slice(0, cursorPosition - 2) + currentValue.slice(cursorPosition);
                inputRef.current.value = newValue;
                inputRef.current.setSelectionRange(cursorPosition - 1, cursorPosition - 1); // 커서 위치 조정
            }
        }
    };

    const handleRequestCouple = async () => {
        const partnerEmail: string = (document.getElementById("submitPartnerEmailField") as HTMLInputElement)!.value;

        if (!partnerEmail || anniversary === "") {
            dispatch(openSnackbar({message: "연인의 이메일과 사귄 날짜를 정확하게 입력해주세요", severity: "error"}));
        }

        let response: AxiosResponse<any, any>;
        try {
            response = await secInstance.post("/api/couple", {
                userEmail1: coupleInfo.user1Email,
                userEmail2: partnerEmail,
                coupleDate: anniversary
            });

            await fetchCoupleInfo();
            dispatch(openSnackbar({message: response.data, severity: "success"}));

        } catch (error: any) {
            if (error.response) {
                const errorMessage = error.response.data || "알 수 없는 오류가 발생했습니다.";

                dispatch(openSnackbar({message: errorMessage, severity: "error"}));
            } else if (error.request) {
                dispatch(openSnackbar({message: "서버로부터 응답을 받지 못했습니다. 다시 시도해주세요.", severity: "error"}));
            } else {
                dispatch(openSnackbar({message: "요청 중 오류가 발생했습니다: " + error.message, severity: "error"}));
            }
        }
    }

    return (
        <>
            <Grid item container justifyContent="space-between" alignItems="center">
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '100%'
                }}>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        width: '100%'
                    }}>
                        <IconButton onClick={() => navigate(-1)}>
                            <ArrowBackIcon/>
                        </IconButton>
                        <IconButton>
                            <HelpOutlineIcon/>
                        </IconButton>
                    </Box>
                    <Typography variant="h6" align="center">
                        {coupleInfo?.user1Name} ♥ {coupleInfo?.user2Name || "???"} <br/>
                    </Typography>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        {coupleInfo.coupleDate ?
                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                width: '100%'
                            }}>
                                <div/>
                                <Typography sx={{marginLeft: '20px'}} variant="h6" align="center">
                                    사랑한 지 {dDayCount(coupleInfo.coupleDate)}일 째
                                </Typography>
                                {tab === 'setting' ?
                                    <IconButton onClick={() => {
                                        navigate('/setting/coupleInfo');
                                        setTab('coupleInfo');
                                    }}>
                                        <ArrowForwardIcon/>
                                    </IconButton>
                                    : <div/>}
                            </Box>

                            :
                            <Typography sx={{marginLeft: '20px', color: 'red', marginTop: '5px'}}
                                        variant="h6">
                                사랑을 찾는중..
                            </Typography>
                        }

                    </Box>
                </Box>
            </Grid>
            {coupleInfo.coupleDate ?
                <Grid item>
                    <Typography variant="h6" align="center">
                        우리의 일지보기
                    </Typography>
                </Grid>
                : <Grid item>
                    <Paper elevation={1} sx={{pt: 2}}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Typography variant="h6" align="center">커플 등록하기</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                    <TextField sx={{width: '250px', mr: 2}} label="연인의 이메일"
                                               placeholder={"연인의 이메일을 입력해주세요!"}
                                               variant="outlined" id={"submitPartnerEmailField"}/>
                                    <TextField
                                        label="인연을 시작한 날짜"
                                        placeholder={"YYYYMMDD"}
                                        inputRef={inputRef}
                                        value={anniversary}
                                        variant="outlined"
                                        onChange={handleAnniversaryChange}
                                        onKeyDown={handleKeyDown}
                                        sx={{
                                            minWidth: '100px',
                                            maxWidth: "160px",
                                            textAlign: 'center'
                                        }}
                                        inputProps={{
                                            htmlInput: {maxLength: 10},
                                        }} // 최대 길이 10자 ('YYYY-MM-DD')
                                    />
                                    <IconButton color={"primary"} aria-label={"커플 등록"} sx={{ml: 1}}
                                                onClick={handleRequestCouple}>
                                        <SendIcon/>
                                    </IconButton>
                                </Box>
                            </Grid>
                            <Grid item xs={6}></Grid>
                            <Grid item xs={6} sx={{pr: 2, pb: 2}}>
                                <Typography variant="subtitle1" align="center" color={"grey"}>
                                    나의 이메일 : {coupleInfo.user1Email}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>}
        </>
    )
}

// 3. 설정 화면 하단부로 커플, 솔로 상관 없이 설정할 수 있는 부분
export function SettingMenu() {
    const navigate = useNavigate();
    return (
        <>
            <Grid sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                width: '100%',
                flexGrow: 1,
                justifyContent: 'center'
            }}>
                <Box sx={{mt: '20px', mb: '20px', ml: '20px'}}>
                    <Typography variant="h6" align="left" onClick={() => {
                        navigate('/setting/myInfo');
                    }}>
                        프로필 변경하기
                    </Typography>
                </Box>
                <Box sx={{mt: '20px', mb: '20px', ml: '20px'}}>
                    <Typography variant="h6" align="left">
                        공지
                    </Typography>
                </Box>
                <Box sx={{mt: '20px', mb: '20px', ml: '20px'}}>
                    <Typography variant="h6" align="left">
                        위치공개정도
                    </Typography>
                </Box>
            </Grid>
            <Grid item>
                <Button variant="contained" sx={{width: '200px', mt: '50px'}}>
                    구독하기!
                </Button>
            </Grid>
        </>
    )
}

// 1. 메인화면에서 프로필을 누르면 넘어오는 부분
export default function SettingComponent() {
    const {coupleInfo} = useCoupleInfo();
    const [tab, setTab] = useState<string>('setting');
    if (!coupleInfo) {
        return (<></>);
    }
    return (
        <Container sx={{maxWidth: '600px', height: '80vh', display: 'flex', flexDirection: 'column', mt: 2}}>
            <Grid container direction="column" alignItems="center" spacing={2} sx={{flexGrow: 1}}>
                <SummaryTab coupleInfo={coupleInfo} tab={tab} setTab={setTab}/>
                <SettingMenu/>
            </Grid>
        </Container>
    );
}

export function CoupleInfoComponent() {
    const {coupleInfo} = useCoupleInfo();
    const [tab, setTab] = useState<string>('coupleInfo');
    if (!coupleInfo) {
        return (<></>);
    }
    return (
        <Container sx={{maxWidth: '600px', height: '80vh', display: 'flex', flexDirection: 'column', mt: 2}}>
            <Grid container direction="column" alignItems="center" spacing={2} sx={{flexGrow: 1}}>
                <SummaryTab coupleInfo={coupleInfo} tab={tab} setTab={setTab}/>
                <CoupleInfoContext coupleInfo={coupleInfo}/>
            </Grid>
        </Container>
    );
}

// 커플 상세 정보 보여주는 화면
export function CoupleInfoContext({coupleInfo}: { coupleInfo: CoupleInfo }) {
    return (
        <Grid container direction="column" alignItems="flex-start" spacing={3}
              sx={{flexGrow: 1, width: '100%', mt: '30px'}}>
            <Grid item container spacing={2} sx={{width: '100%'}}>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '20px',
                    marginLeft: '20px'
                }}>
                    <Grid item xs={12}>
                        <Typography variant="h6">
                            나의 정보
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="body1">
                            {coupleInfo.user1Name}
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="body1">
                            {coupleInfo.user1Birth}
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="body1">
                            {coupleInfo.user1BloodType}
                        </Typography>
                    </Grid>
                </Box>
            </Grid>
            <Grid item container spacing={2} sx={{width: '100%'}}>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '20px',
                    marginLeft: '20px'
                }}>
                    {coupleInfo.coupleDate ?
                        <>
                            <Grid item xs={12}>
                                <Typography variant="h6">
                                    연인 정보
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="body1">
                                    {coupleInfo.user2Name}
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="body1">
                                    {coupleInfo.user2Birth}
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="body1">
                                    {coupleInfo.user2BloodType}
                                </Typography>
                            </Grid>
                        </>
                        :
                        <Grid item xs={12} sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                            <Typography variant="h5" color="text.secondary">
                                연인을 등록해주세요!
                            </Typography>
                        </Grid>
                    }
                </Box>
            </Grid>
        </Grid>
    )
}

// 개인 상세 정보 조회 및 변경하는 화면
export function EditUserInfoComponent() {
    const {userInfo, fetchUserInfo} = useUserInfo();

    return (<></>)
}