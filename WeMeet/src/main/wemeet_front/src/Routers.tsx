import {Route, Routes} from "react-router-dom";

export default function Routers() {
    return (
        <Routes>
            <Route path='/' element={<div>MainPage</div>}/>
            <Route path="*" element={<div style={{color: 'red'}}>404 NotFound</div>}/>
        </Routes>
    );
}