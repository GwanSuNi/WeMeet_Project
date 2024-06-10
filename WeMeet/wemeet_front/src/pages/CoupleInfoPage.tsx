import React from 'react';
import {Box, Grid, Typography, IconButton, Button, Container} from '@mui/material/';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {styled} from "@mui/system";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";

const CoupleInfoComponent = () => {
    return (
        <Container sx={{maxWidth: '600px', height: '80vh', display: 'flex', flexDirection: 'column', mt: 2}}>
            <Grid container direction="column" alignItems="center" spacing={2} sx={{flexGrow: 1}}>
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
                            <IconButton>
                                <ArrowBackIcon/>
                            </IconButton>
                            <Typography variant="h6" align="center">
                                우리의 시작
                            </Typography>
                            <IconButton>
                                <HelpOutlineIcon/>
                            </IconButton>
                        </Box>
                        <Typography variant="h6" align="center">
                            양제훈 ♥ 김옥자 <br/>
                        </Typography>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <Typography sx={{marginLeft: '20px'}} variant="h6" align="center">
                                321일 째
                            </Typography>
                            <IconButton>
                                <ArrowForwardIcon/>
                            </IconButton>
                        </Box>
                    </Box>
                </Grid>

                <Grid item>
                    <Typography variant="h6" align="center">
                        우리의 일지보기 <br/>
                        나의 코드 : a13049Bfd
                    </Typography>
                </Grid>

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

            </Grid>
        </Container>
    );
}

const NoCoupleInfoComponent = () => {
    const Item = styled(Paper)(({theme}) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        padding: theme.spacing(1),
        textAlign: 'center',
    }));
    return (
        <Container sx={{maxWidth: '600px', height: '80vh', display: 'flex', flexDirection: 'column', mt: 2}}>
            <Grid container direction="column" alignItems="center" spacing={2} sx={{flexGrow: 1}}>
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
                            <IconButton>
                                <ArrowBackIcon/>
                            </IconButton>
                            <Typography variant="h6" align="center">
                                우리의 시작
                            </Typography>
                            <IconButton>
                                <HelpOutlineIcon/>
                            </IconButton>
                        </Box>
                        <Typography variant="h6" align="center">
                            양제훈 ♥ ??? <br/>
                        </Typography>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <Typography sx={{marginLeft: '20px', color: 'red', marginTop: '5px'}} variant="h6"
                                        align="center">
                                사랑을 찾는중..
                            </Typography>
                        </Box>
                    </Box>
                </Grid>

                <Grid item>
                    <Typography variant="h6" align="center">
                        나의 코드 : a13049Bfd
                    </Typography>
                    <TextField sx={{width: '250px'}} placeholder={"연인의 코드를 입력해주세요!"} variant="outlined"/>
                </Grid>

                <Grid container direction="column" alignItems="flex-start" spacing={3}
                      sx={{flexGrow: 1, width: '100%', mt: '30px'}}>
                    <Grid item container spacing={2} sx={{width: '100%'}}>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '20px',
                            marginLeft:'20px'
                        }}>
                            <Grid item xs={12}>
                                <Typography variant="h6">
                                    나의 연인 정보
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="body1">
                                    양제훈
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="body1">
                                    010101
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="body1">
                                    AB
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
                            marginLeft:'20px'
                        }}>
                            <Grid item xs={12}>
                                <Typography variant="h6">
                                    나의 연인 정보
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="body1">
                                    김옥지
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="body1">
                                    020104
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="body1">
                                    B
                                </Typography>
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
                        <Grid item xs={12} sx={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                            <Typography variant="h5" color="text.secondary">
                                나의 연인을 등록해주세요!
                            </Typography>
                        </Grid>
        </Container>
    );
}

export {CoupleInfoComponent, NoCoupleInfoComponent}
