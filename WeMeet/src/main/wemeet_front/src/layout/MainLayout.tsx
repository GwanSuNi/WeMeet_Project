import Box from "@mui/material/Box";
import SignUp from "../components/SignUp";
import StickyFooter from "../components/StickyFooter";
import React from "react";

export default function MainLayout(props: { children: React.ReactNode }) {
    return (
        <Box sx={{
            maxWidth: '1080px',
            margin: 'auto',

            '@media (min-width: 1080px)' : {
                backgroundColor:"black"
            }
        }}>
            <main
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    minHeight: 'calc(100vh - 56px)', // - 연산자 앞뒤로 공백 안주면 계산안됨 ㅋㅋ
                    width:'100%'
                }}
            >
                {props.children}
            </main>
            <StickyFooter/>
        </Box>
    );
}