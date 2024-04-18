import React, {useEffect, useState} from 'react';
import {CircularProgress, Fab} from "@mui/material";
import Box from "@mui/material/Box";
import CreateIcon from '@mui/icons-material/Create';
import NotificationsIcon from '@mui/icons-material/Notifications';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import PersonIcon from '@mui/icons-material/Person';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import HistoryIcon from '@mui/icons-material/History';

let mapInstance: naver.maps.Map | null = null;

const loadScript = (src: string, callback: () => void) => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = src;
    script.onload = () => callback();
    document.head.appendChild(script);
};

function MapInformation({latitude, longitude,}: {
    latitude: number;
    longitude: number;
}) {
    // 지도 로딩 상태
    const [isMapLoaded, setMapLoaded] = useState(false);

    const initMap = () => {
        // 추가 옵션 설정
        const mapOptions = {
            zoomControl: true,
            zoomControlOptions: {
                style: naver.maps.ZoomControlStyle.SMALL,
                position: naver.maps.Position.RIGHT_CENTER,
            },
            center: new naver.maps.LatLng(latitude, longitude),
            zoom: 16,
        };

        // 지도 초기화 확인
        if (document.getElementById('map')) {
            mapInstance = new naver.maps.Map('map', mapOptions);
        }

        // Marker 생성
        // const marker = new naver.maps.Marker({
        //     position: new naver.maps.LatLng(latitude, longitude),
        //     map: mapInstance,
        // });

        // Marker 클릭 시 지도 초기화
        // naver.maps.Event.addListener(marker, 'click', () => {
        //     mapInstance?.setCenter(new naver.maps.LatLng(latitude, longitude));
        //     mapInstance?.setZoom(16);
        // });

        // 지도 로드 완료
        setMapLoaded(true);
    };

    useEffect(() => {
        // 스크립트 로딩 확인
        if (typeof naver === 'undefined') {
            loadScript(
                'https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=m00xstj1p1',
                initMap,
            );
        } else {
            initMap();
        }
    }, [latitude, longitude]);

    return (
        <>
            {/* 위치 정보(지도) */}
            <div>
                {/*{isMapLoaded && (*/}
                {/*    <div id="map" style={{width: '100%', height: 'calc(100vh - 56px)'}}/>*/}
                {/*)}*/}
                {(isMapLoaded) ?
                    (<MapContent/>)
                    : (<Box sx={{
                        width: '100%', height: 'calc(100vh - 56px)',
                        display: 'flex',
                        justifyContent: 'center', // 수평 가운데 정렬
                        alignItems: 'center',
                    }}>
                        <CircularProgress />
                    </Box>)}

            </div>
        </>
    );
}

function MapContent() {
    const [isHovered, setIsHovered] = useState<{
        myInfo: boolean;
        notification: boolean;
        history: boolean;
    }>({
        myInfo: false,
        notification: false,
        history: false,
    });
    const handleMouseEnter = (name: keyof typeof isHovered) => {
        setIsHovered((prevState) => ({ ...prevState, [name]: true }));
    };

    const handleMouseLeave = (name: keyof typeof isHovered) => {
        setIsHovered((prevState) => ({ ...prevState, [name]: false }));
    };

    return (
        <Box sx={{
            width: '100%', height: 'calc(100vh - 56px)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center', // 수평 가운데 정렬
            alignItems: 'center',
            position: 'relative', // Box 컴포넌트에 상대적인 위치 설정
        }}>
            <div id="map" style={{width: '100%', height: 'calc(100vh - 56px)'}}/>
            <Fab color="inherit" size={"medium"} aria-label="myInfo" sx={{
                position: 'absolute',
                left: '10px',
                top: '10px',
                // '&:hover': {
                //     backgroundColor: 'transparent',
                // },
            }}
                 onMouseEnter={() => handleMouseEnter('myInfo')}
                 onMouseLeave={() => handleMouseLeave('myInfo')}>
                {isHovered.myInfo ? (
                    <PersonIcon color="primary" sx={{width: '1.5rem', height: '1.5rem'}}/>
                ) : (
                    <PersonOutlinedIcon color="inherit" sx={{width: '1.5rem', height: '1.5rem'}}/>
                )}
            </Fab>
            <Fab size={"medium"} color="inherit" aria-label="notification" sx={{
                position: 'absolute',
                right: '70px',
                top: '10px'
            }}
                 onMouseEnter={() => handleMouseEnter('notification')}
                 onMouseLeave={() => handleMouseLeave('notification')}>
                {isHovered.notification ? (
                    <NotificationsIcon color="primary" sx={{width: '1.5rem', height: '1.5rem'}}/>
                ) : (
                    <NotificationsOutlinedIcon color="inherit" sx={{width: '1.5rem', height: '1.5rem'}}/>
                )}
            </Fab>
            <Fab size={"medium"} color="inherit" aria-label="history" sx={{
                position: 'absolute',
                right: '10px',
                top: '10px'
            }}
                 onMouseEnter={() => handleMouseEnter('history')}
                 onMouseLeave={() => handleMouseLeave('history')}>
                {/*<HistoryIcon/>*/}
                {isHovered.history ? (
                    <HistoryIcon color="primary" sx={{width: '1.5rem', height: '1.5rem'}}/>
                ) : (
                    <HistoryIcon color="inherit" sx={{width: '1.5rem', height: '1.5rem'}}/>
                )}
            </Fab>
            <Fab variant="extended" size="medium" color="primary" sx={{
                position: 'absolute', // 절대 위치 설정
                bottom: '20px', // 하단 여백
            }}>
                <CreateIcon sx={{mr: 1}}/>
                일지 작성
            </Fab>
        </Box>);
}


export default MapInformation;