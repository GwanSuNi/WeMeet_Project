import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import {Card, CardContent} from "@mui/material";
import React from "react";
import Button from "@mui/material/Button";
import '../css/logoStyle.css';
import TextField from "@mui/material/TextField";
import SendIcon from '@mui/icons-material/Send';
import WeMeetLogo from "./WeMeetLogo";

export default function CourseSuggest() {
    return (
        <>
            <Container sx={{
                maxWidth: '1080px',
                width: '100%', height: 'calc(100vh - 56px)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
            }}>
                {/*<CourseHeader/>*/}
                <WeMeetLogo text={"AI 데이트 코스 추천"}/>
                <OutlinedCard/>
            </Container>
        </>
    );
}

const card = (
    <>
        <CardContent>
            <Typography variant="h5" component="div">
                AI 응답 카드
            </Typography>
            <Typography variant="body1" sx={{
                minHeight: '200px',
            }}>
                {'"GPT 응답 내용"'}
            </Typography>
        </CardContent>
    </>
);

function OutlinedCard() {
    return (
        <Box display={'flex'}
             flexDirection={'column'}
             sx={{maxWidth: '1080px', minWidth: 275, width: '70vw', padding: "10px"}}>
            <Card variant="outlined">{card}</Card>
            <SuggestInput/>
            <Button variant="contained" endIcon={<SendIcon/>} sx={{
                maxWidth: '100px',
                alignSelf: 'center'
            }}>
                결정
            </Button>
        </Box>
    );
}

function SuggestInput() {
    return (
        <Box
            display={'flex'}
            justifyContent={'space-between'}
            component="form"
            noValidate
            autoComplete="off"
            maxWidth={'1080px'}
            sx={{pt: '10px', pb: '10px'}}
        >
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': {mt: '2px', maxWidth: '100rem', minWidth: '250Px'},
                }}
                noValidate
                autoComplete="off"
                flexGrow={1}
            >
                <TextField
                    id="outlined-textarea"
                    label="대화하기"
                    placeholder="데이트 지역이나 원하는 활동 입력"
                    multiline
                    rows={2}
                    sx={{
                        minWidth: '200px',
                        width: '100%', // 너비를 100%로 설정하여 화면의 너비에 따라 조절
                        mr: '10px',
                    }}
                />
            </Box>

            <Button variant="contained" sx={{mt: "5px", mb: "5px", ml:"10px"}}>
                <SendIcon/>
            </Button>
        </Box>
    );
}