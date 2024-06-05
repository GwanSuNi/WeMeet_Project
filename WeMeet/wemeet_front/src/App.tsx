import CourseSuggest from "./components/CourseSuggest";
import MapInformation from "./components/MapInfomation";
import {usePage} from "./hooks/usePage";
import Box from "@mui/material/Box";
import Routes from "./routes";

function App() {
    return (
        <Box display='flex' justifyContent='space-evenly' bgcolor='black'>
            <Box display={{xs: 'none', lg: 'flex'}} width='300px' bgcolor='yellowgreen'/>
            <Routes/>
        </Box>
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
            return <MapInformation latitude={geo.latitude} longitude={geo.logitude}/>;
            ;
    }
}

export default App;
