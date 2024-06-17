import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {setBirth, setUsername, setMethod, setNickname, setPassword, setBloodType} from "../../redux/SignUpSlice";
import {RootState} from "../../redux/store";
import React, {useEffect, useState} from "react";
import WheelPicker from "react-wheelpicker";
import {Box, Button, Divider, Grid, Link, Typography} from "@mui/material/";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import {IconButton} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {useJoin} from "../../hooks/useJoin";

export default function SignUpMethod() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSelectMethod = (method: string) => {
        dispatch(setMethod(method));
        navigate('/signup/email');
    }
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'space-around',
                height: '100vh',
            }}
        >
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
                        <img className="logoImg" src={"image/wemeetlogo.png"} alt={"WeMeet Logo"}/>
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <Stack direction={'column'} spacing={2}>
                        <Button variant={'contained'} onClick={() => handleSelectMethod('email')}>이메일로 시작</Button>
                        <Button variant={'contained'} onClick={() => handleSelectMethod('social')}>소셜 미디어로 시작</Button>
                        <Link onClick={() => navigate('/login')}>이미 계정이 있으신가요?</Link>
                    </Stack>
                </Grid>
            </Grid>
        </Box>
    )
}

export function SetEmail() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const email = useSelector((state: RootState) => state.signUp.username);
    const [emailInput, setEmailInput] = useState(email || '');
    const password = useSelector((state: RootState) => state.signUp.password);
    const [passwordInput, setPasswordInput] = useState(password || '');
    const handleNext = (event: React.FormEvent) => {
        event.preventDefault();
        dispatch(setUsername(emailInput));
        dispatch(setPassword(passwordInput));
        navigate('/signUp/nickname');
    };
    return (
        <Box component="form" noValidate onSubmit={handleNext}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'space-around',
                height: '100vh',
            }}
        >
            <Grid container spacing={2}>
                <Grid item>
                    <IconButton onClick={() => navigate(-1)}>
                        <ArrowBackIcon/>
                    </IconButton>
                </Grid>
                <Grid item>
                    <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
                        <Typography variant={'h4'}>이메일로 가입하기</Typography>
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <Stack direction={'column'} spacing={2}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="username"
                            label="이메일"
                            name="username"
                            autoComplete="username"
                            autoFocus
                            value={emailInput}
                            onChange={e => setEmailInput(e.target.value)}
                            placeholder={"이메일을 입력해주세요"}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="비밀번호"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            value={passwordInput}
                            onChange={e => setPasswordInput(e.target.value)}
                            placeholder="비밀번호를 입력해주세요"
                        />
                        <Button type={"submit"} variant={'contained'}>다음</Button>
                    </Stack>
                </Grid>
            </Grid>
        </Box>
    )
}

export function SetNickname() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const nickname = useSelector((state: RootState) => state.signUp.nickname);
    const [nicknameInput, setNicknameInput] = useState(nickname || '');

    const handleNext = (event: React.FormEvent) => {
        event.preventDefault();
        dispatch(setNickname(nicknameInput));
        navigate('/signUp/birthdate');
    };

    return (
        <Box component="form" noValidate onSubmit={handleNext}
             sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'space-around',
                height: '100vh',
            }}
        >
            <Grid container spacing={2}>
                <Grid item>
                    <IconButton onClick={() => navigate(-1)}>
                        <ArrowBackIcon/>
                    </IconButton>
                </Grid>
                <Grid item>
                    <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
                        <Typography variant={'h4'}>닉네임 설정</Typography>
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <Stack direction={'column'} spacing={2}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="nickname"
                            label="닉네임"
                            name="nickname"
                            autoComplete="nickname"
                            autoFocus
                            value={nicknameInput}
                            onChange={e => setNicknameInput(e.target.value)}
                            placeholder={"커플과 함께 사용할 닉네임을 입력해주세요"}
                        />
                        <Button type={"submit"} variant={'contained'} >다음</Button>
                    </Stack>
                </Grid>
            </Grid>
        </Box>
    );
}

export function SetBirthDate() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const currentYear = new Date().getFullYear();

    const years = Array.from({length: currentYear - 1900 + 1}, (_, i) => 1900 + i);
    const months = Array.from({length: 12}, (_, i) => i + 1);
    const daysInMonth = (year: number, month: number): number[] => {
        return Array.from({length: new Date(year, month, 0).getDate()}, (_, i) => i + 1);
    };

    const [selectedYear, setSelectedYear] = useState<number>(currentYear);
    const [selectedMonth, setSelectedMonth] = useState<number>(1);
    const [selectedDay, setSelectedDay] = useState<number>(1);

    // Update selected day if it's greater than the number of days in the new month
    useEffect(() => {
        const days = daysInMonth(selectedYear, selectedMonth);
        if (selectedDay > days.length) {
            setSelectedDay(days.length);
        }
    }, [selectedYear, selectedMonth]);

    function handleNext(event: React.FormEvent) {
        event.preventDefault();
        dispatch(setBirth(`${selectedYear}-${selectedMonth}-${selectedDay}`));
        navigate('/signUp/bloodType');
    }

    return (
        <>
            <Box component="form" noValidate onSubmit={handleNext}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                    height: '100vh',
                }}
            >
                <Grid container spacing={2}>
                    <Grid item>
                        <IconButton onClick={() => navigate(-1)}>
                            <ArrowBackIcon/>
                        </IconButton>
                    </Grid>
                    <Grid item>
                        <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
                            <Typography variant={'h4'}>생년월일 설정</Typography>
                            <br/>
                            <Typography variant={'h5'}>{`${selectedYear}년${selectedMonth}월${selectedDay}일`}</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12}>
                        <Stack direction={'column'} spacing={2}>
                            <Box display={'flex'} flexDirection={'row'} alignItems={'center'} justifyContent={'center'}>
                                <WheelPicker
                                    animation="flat"
                                    data={years.map(year => `${year}년`)}
                                    updateSelection={(index: number) => {
                                        if (index < years.length) {
                                            setSelectedYear(years[index]);
                                        }
                                    }}
                                    scrollerId="year-picker"
                                    height={40}
                                    parentHeight={280}
                                    defaultSelection={years.indexOf(currentYear)}
                                    fontSize={20}
                                />
                                <WheelPicker
                                    animation="flat"
                                    data={months.map(month => `${month}월`)}
                                    updateSelection={(index: number) => {
                                        if (index < months.length) {
                                            setSelectedMonth(months[index]);
                                        } else {
                                            setSelectedMonth(months[11]);
                                        }
                                    }}
                                    scrollerId="month-picker"
                                    height={40}
                                    parentHeight={280}
                                    defaultSelection={0}
                                    fontSize={20}
                                />
                                <WheelPicker
                                    animation="flat"
                                    data={daysInMonth(selectedYear, selectedMonth).map(day => `${day}일`)}
                                    updateSelection={(index: number) => {
                                        const days = daysInMonth(selectedYear, selectedMonth);
                                        if (index < days.length) {
                                            setSelectedDay(days[index]);
                                        }
                                    }}
                                    scrollerId="day-picker"
                                    height={40}
                                    parentHeight={280}
                                    defaultSelection={0}
                                    fontSize={20}
                                />
                            </Box>
                            <Button type={"submit"} variant={'contained'}>다음</Button>
                        </Stack>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}

export function SetBloodType() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const bloodType = useSelector((state: RootState) => state.signUp.bloodType);
    const [bloodTypeInput, setBloodTypeInput] = useState(bloodType || 'A+');

    const bloodTypes = ['A+', 'B+', 'AB+', 'O+', 'A-', 'B-', 'AB-', 'O-'];

    const handleNext = (event: React.FormEvent) => {
        event.preventDefault();
        dispatch(setBloodType(bloodTypeInput));
        navigate('/signUp/confirm');
    };

    return (
        <>
            <Box component="form" noValidate onSubmit={handleNext}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                    height: '100vh',
                }}
            >
                <Grid container spacing={2}>
                    <Grid item>
                        <IconButton onClick={() => navigate(-1)}>
                            <ArrowBackIcon/>
                        </IconButton>
                    </Grid>
                    <Grid item>
                        <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
                            <Typography variant={'h4'}>혈액형 설정</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12}>
                        <Stack direction={'column'} spacing={2}>
                            <Box display={'flex'} flexDirection={'row'} alignItems={'center'} justifyContent={'center'}>
                                <WheelPicker
                                    animation="flat"
                                    data={bloodTypes}
                                    updateSelection={(index: number) => {
                                        setBloodTypeInput(bloodTypes[index]);
                                    }}
                                    scrollerId="blood-picker"
                                    height={40}
                                    parentHeight={280}
                                    defaultSelection={bloodTypes.indexOf(bloodTypeInput)}
                                    fontSize={20}
                                />
                            </Box>
                            <Button type={"submit"} variant={'contained'}>다음</Button>
                        </Stack>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}

// 개발 중엔 값을 보여주게 하고, 실제로는 그냥 날짜 선택 끝나면 전송하여 로그인 페이지로 이동하게 하기
export function SignUpConfirm() {
    const navigate = useNavigate();
    const {handleSubmit} = useJoin();

    return (
        <>
            <Box component="form" noValidate onSubmit={handleSubmit}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                    height: '100vh',
                }}
            >
                <Grid container spacing={2}>
                    <Grid item>
                        <IconButton onClick={() => navigate(-1)}>
                            <ArrowBackIcon/>
                        </IconButton>
                    </Grid>
                    <Grid item>
                        <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
                            <Typography variant={'h4'}>회원가입 정보 확인</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12}>
                        <Stack direction={'column'} spacing={2} divider={<Divider orientation="horizontal" flexItem/>}>
                            <Typography
                                variant={'h5'}>이메일: {useSelector((state: RootState) => state.signUp.username)}</Typography>
                            <Typography
                                variant={'h5'}>닉네임: {useSelector((state: RootState) => state.signUp.nickname)}</Typography>
                            <Typography
                                variant={'h5'}>생년월일: {useSelector((state: RootState) => state.signUp.birth)}</Typography>
                            <Typography
                                variant={'h5'}>혈액형: {useSelector((state: RootState) => state.signUp.bloodType)}</Typography>
                            <Button type={"submit"} variant={'contained'}>완료</Button>
                        </Stack>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}