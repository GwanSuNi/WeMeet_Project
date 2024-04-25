import React, {useState} from 'react';
import './App.css';
import SignUp from "./components/SignUp";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import StickyFooter from "./components/StickyFooter";
import Box from "@mui/material/Box";
import MainLayout from "./layout/MainLayout";
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
            <MainLayout>
                {/*<SignUp/>*/}
                {/*<MapTest/>*/}
                {/*page state에 따라 어떤 컴포넌트를 보여줄지 분기해주는 코드*/}
                {/*<MapInformation latitude={geo.latitude} longitude={geo.logitude}/>*/}
                <CourseSuggest/>
                {/*<WeMeetLogo text={"AI 데이트 코스 추천"}/>*/}
            </MainLayout>
        </>
    );
}

export default App;
