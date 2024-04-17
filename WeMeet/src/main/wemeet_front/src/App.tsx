import React, {useState} from 'react';
import './App.css';
import SignUp from "./components/SignUp";
import MainLayout from "./layout/MainLayout";
import {useMediaQuery} from 'react-responsive'
import CourseSuggest from "./components/CourseSuggest";
import {Provider, useSelector} from "react-redux";
import store from "./store";
import MapInformation from "./components/MapInfomation";
import {usePage} from "./hooks/usePage";
import MapTest from "./components/MapTest";
import Routers from "./Routers";


function App() {
    return (
        <>
            <Provider store={store}>
                <Desktop/>
                <Tablet/>
                <Mobile/>
            </Provider>
        </>
    );
}
const PageComponent = () => {
    const page = usePage(); // redux에서 page값을 조회하는 커스텀 hook
    const geo: any = {
        latitude: 37.3595704,
        logitude: 127.105399
    }
    switch (page) {
        case 0:
            return <CourseSuggest/>;
        case 1:
            return <MapInformation latitude={geo.latitude} longitude={geo.logitude}/>;
        case 2:
            return <div>People Pick</div>;
        default:
            return <MapInformation latitude={geo.latitude} longitude={geo.logitude}/>;;
    }
}
const Desktop = () => {
    const isDesktop = useMediaQuery({minWidth: 1025})
    return isDesktop ? (
        <div className='desktop-frame'>
            <div className='smop'>SMOP</div>
            <div className='desktop'>
                <MainLayout>
                    <PageComponent/>
                </MainLayout>
            </div>
        </div>
    ) : null
}
const Tablet = () => {
    const isTablet = useMediaQuery({minWidth: 768, maxWidth: 1024})
    return isTablet ? (
        <div className='tablet'>
            <MainLayout>
                {/*<SignUp/>*/}
                {/*<MapTest/>*/}
                {/*page state에 따라 어떤 컴포넌트를 보여줄지 분기해주는 코드*/}
                {/*<MapInformation latitude={geo.latitude} longitude={geo.logitude}/>*/}
                <PageComponent/>
                {/*<WeMeetLogo text={"AI 데이트 코스 추천"}/>*/}
            </MainLayout>
        </div>
    ) : null
}
const Mobile = () => {
    const isMobile = useMediaQuery({maxWidth: 767})
    return isMobile ? (
        <div className='mobile'>
            <MainLayout>
                <PageComponent/>
            </MainLayout>
        </div>
    ) : null
}

export default App;
