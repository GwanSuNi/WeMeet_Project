import React, {useState} from "react";
import {BottomNavigation, BottomNavigationAction} from "@mui/material";
import AssistantDirectionIcon from "@mui/icons-material/AssistantDirection";
import MapIcon from "@mui/icons-material/Map";
import ExploreIcon from "@mui/icons-material/Explore";

export default function LabelBottomNavigation() {
    const [value, setValue] = useState("map");

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };
    return (
            <BottomNavigation
                value={value}
                onChange={handleChange}
            >
                <BottomNavigationAction label="코스 추천" value="courseSugg" icon={<AssistantDirectionIcon />} />
                <BottomNavigationAction label="지도" value="map" icon={<MapIcon />} />
                <BottomNavigationAction label="피플픽" value="peoplePick" icon={<ExploreIcon />} />
            </BottomNavigation>
    );
}