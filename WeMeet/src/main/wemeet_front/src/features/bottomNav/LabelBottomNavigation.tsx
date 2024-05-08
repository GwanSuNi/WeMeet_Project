import React, {useState} from "react";
import {BottomNavigation, BottomNavigationAction} from "@mui/material";
import AssistantDirectionIcon from "@mui/icons-material/AssistantDirection";
import MapIcon from "@mui/icons-material/Map";
import ExploreIcon from "@mui/icons-material/Explore";
import {useDispatch} from "react-redux";
import {useLocation, useNavigate} from "react-router-dom";

export default function LabelBottomNavigation() {
    const dispatch = useDispatch();
    const [value, setValue] = useState("map");
    const navigate = useNavigate();
    const location = useLocation();

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };
    return (
        <BottomNavigation
            value={value}
            onChange={handleChange}
        >
            <BottomNavigationAction
                label="코스 추천"
                value="courseSugg"
                icon={<AssistantDirectionIcon/>}
                onClick={() => location.pathname !== '/course' && navigate('/course')}
            />
            <BottomNavigationAction
                label="지도"
                value="map"
                icon={<MapIcon/>}
                onClick={() => location.pathname !== '/' && navigate('/')}
            />
            <BottomNavigationAction
                label="피플픽"
                value="peoplePick"
                icon={<ExploreIcon/>}
                onClick={() => location.pathname !== '/peoplePick' && navigate('/peoplePick')}
            />
        </BottomNavigation>
    );
}