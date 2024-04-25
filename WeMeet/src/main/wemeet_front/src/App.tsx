import React, {useState} from 'react';
import './App.css';
import SignUp from "./components/SignUp";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import StickyFooter from "./components/StickyFooter";
import Box from "@mui/material/Box";
import MainLayout from "./layout/MainLayout";
import { useMediaQuery } from 'react-responsive'
import MapInformation from "./components/MapInfomation";
import MapTest from "./components/MapTest";
import CourseSuggest from "./components/CourseSuggest";
import WeMeetLogo from "./components/WeMeetLogo";

function App() {
    const [page, setPage] = useState(1);
    const geo : any = {
        latitude : 37.3595704,
        logitude : 127.105399
    }
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
                {/*<SignUp/>*/}
                {/*<MapTest/>*/}
                {/*page state에 따라 어떤 컴포넌트를 보여줄지 분기해주는 코드*/}
                {/*<MapInformation latitude={geo.latitude} longitude={geo.logitude}/>*/}
                <CourseSuggest/>
                {/*<WeMeetLogo text={"AI 데이트 코스 추천"}/>*/}
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
