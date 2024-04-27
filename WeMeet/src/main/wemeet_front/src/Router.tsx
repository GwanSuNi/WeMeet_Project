import {Route, Routes} from "react-router-dom";
import MapInformation from "./components/MapInfomation";
import DateDiaryListPage from "./pages/DateDiaryListPage";

export default function Router() {
    const geo: any = {
        latitude: 37.3595704,
        logitude: 127.105399
    }

    return (
        <Routes>
            <Route path='/' element={<MapInformation latitude={geo.latitude} longitude={geo.logitude}/>}/>
            <Route path='/diary' element={<DateDiaryListPage/>}/>
            <Route path="*" element={<div style={{color: 'red'}}>404 NotFound</div>}/>
        </Routes>
    );
}