import {Outlet} from "react-router-dom";
import MapInformation from "../components/MapInfomation";
import DateDiaryListPage from "../pages/DateDiaryListPage";
import MainLayout from "../layout/MainLayout";
import CourseSuggest from "../components/CourseSuggest";
import React from "react";
import PeoplePickCard from "../components/PeoplePick";
import PeoplePickCardReadMore from "../components/PeoplePickReadMore";

const geo: any = {
    latitude: 37.3595704,
    logitude: 127.105399
}

const MainRoutes = [
    {
        path: '/',
        element: <MainLayout><Outlet/></MainLayout>,
        children: [
            {
                path: '/',
                element: <MapInformation latitude={geo.latitude} longitude={geo.logitude}/>
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
                element: <DateDiaryListPage/>
            }
        ]
    },
    {
        path: '*',
        element: <div>Not Found</div>
    }
];

export default MainRoutes;