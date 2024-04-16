import React from 'react';
import './App.css';
import SignUp from "./components/SignUp";
import NavBar from "./layout/NavBar";
import Footer from "./components/Footer";
import StickyFooter from "./components/StickyFooter";
import Box from "@mui/material/Box";

function App() {

    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    minHeight: 'calc(100vh - 64px)', // - 연산자 앞뒤로 공백 안주면 계산안됨 ㅋㅋ
                }}
            >
                <SignUp/>
            </Box>
                <StickyFooter/>
        </>
    );
}

export default App;
