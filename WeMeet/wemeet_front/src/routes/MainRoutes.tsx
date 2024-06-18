import MapInformation from "../components/MapInfomation";
import {CoupleInfoComponent, DateDiaryListPage, NoCoupleInfoComponent, WriteDiaryPage} from '@pages';
import MainLayout from "../layout/MainLayout";
import CourseSuggest from "../components/CourseSuggest";
import PeoplePickCard from "../components/PeoplePick";
import PeoplePickCardReadMore from "../components/PeoplePickReadMore";
import ProtectedRoute from "./ProtectedRoute";

const geo: any = {
    latitude: 37.3595704,
    longitude: 127.105399
}

const MainRoutes = [
    {
        path: '/',
        element: <MainLayout/>,
        children: [
            {
                path: '/',
                element: <ProtectedRoute element={<MapInformation latitude={geo.latitude} longitude={geo.longitude}/>}/>
            },
            {
                path: 'course',
                element: <CourseSuggest/>
            },
            {
                path: 'peoplepick',
                element: <PeoplePickCard/>
            },
            {
                path: 'peoplepick/more',
                element: <PeoplePickCardReadMore/>
            },
            {
                path: 'diary',
                children: [
                    {
                        path: '',
                        element: <DateDiaryListPage/>
                    },
                    {
                        path: 'write',
                        element: <WriteDiaryPage/>
                    }
                ]
            },
            {
                path: 'coupleInfo',
                element: <CoupleInfoComponent/>
            },
            {
                path: 'noCoupleInfo',
                element: <NoCoupleInfoComponent/>
            }
        ]
    },
    {
        path: '*',
        element: <div style={{color: 'red'}}>Not Found</div>
    }
];

export default MainRoutes;