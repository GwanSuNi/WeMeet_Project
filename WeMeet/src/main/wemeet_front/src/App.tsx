import React from 'react';
import './App.css';
import SignUp from "./components/SignUp";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import StickyFooter from "./components/StickyFooter";
import Box from "@mui/material/Box";
import MainLayout from "./layout/MainLayout";
import { useMediaQuery } from 'react-responsive'

function App() {

    return (
        <>
            <Desktop/>
            <Tablet/>
            <Mobile/>
        </>
    );
}
const Desktop = () => {
    const isDesktop = useMediaQuery({ minWidth: 1025 })
    return isDesktop ? (
        <div className='desktop-frame'>
            <div className='smop'>SMOP</div>
            <div className='desktop'>
                <MainLayout>
                    <SignUp/>
                </MainLayout>
            </div>
        </div>
    ) : null
}
const Tablet = () => {
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 })
    return isTablet ? (
        <div className='tablet'>
            <MainLayout>
                <SignUp/>
            </MainLayout>
        </div>
    ) : null
}
const Mobile = () => {
    const isMobile = useMediaQuery({ maxWidth: 767 })
    return isMobile ? (
        <div className='mobile'>
            <MainLayout>
                <SignUp/>
            </MainLayout>
        </div>
    ) : null
}

export default App;
