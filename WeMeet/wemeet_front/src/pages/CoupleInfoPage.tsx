import React, {useState} from 'react';
import {Box, Grid, Typography, IconButton, Button, Container} from '@mui/material/';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import TextField from "@mui/material/TextField";
import {CoupleInfo, useCoupleInfo} from "../hooks/useCoupleInfo";
import {useNavigate} from "react-router-dom";
import SendIcon from "@mui/icons-material/Send";

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

export function SummaryTab({coupleInfo, tab, setTab}: { coupleInfo: CoupleInfo, tab: string, setTab: (tab: string) => void }) {
    const navigate = useNavigate();

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
                    <Typography variant="h6" align="center">
                        나의 이메일 : {coupleInfo.user1Email}
                    </Typography>
                    <TextField sx={{width: '250px'}} placeholder={"연인의 이메일을 입력해주세요!"} variant="outlined"/>
                </Grid>}
        </>
    )
}

export function SettingMenu() {
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
                    <Typography variant="h6" align="left">
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

export default function SettingComponent() {
    const {coupleInfo, setCoupleInfo} = useCoupleInfo();
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
    const {coupleInfo, setCoupleInfo} = useCoupleInfo();
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