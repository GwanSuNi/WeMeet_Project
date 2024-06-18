import {KeyboardEvent, MouseEvent, useEffect, useState} from 'react';
import {CircularProgress, Fab, Box} from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import PersonIcon from '@mui/icons-material/Person';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import HistoryIcon from '@mui/icons-material/History';
import {DateRecordDrawer, MarkerDrawer} from '@components';
import {useNavigate} from 'react-router-dom';

let mapInstance: naver.maps.Map | undefined = undefined;

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
    const [markerDrawerActive, setMarkerDrawerActive] = useState(false);
    const [marker1, setMarker1] = useState<naver.maps.Marker | null>(null);
    const [marker2, setMarker2] = useState<naver.maps.Marker | null>(null);
    const [dateRecordDrawerActive, setDateRecordDrawerActive] = useState(false);

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
        const marker = new naver.maps.Marker({
            position: new naver.maps.LatLng(latitude, longitude),
            map: mapInstance,
            icon: {
                url: 'https://github.com/ssssssh0612/ssssssh0612.github.io/assets/120111926/81770bf2-d04d-4ba7-ac25-95419eaafa54',
                scaledSize: new naver.maps.Size(34, 34)
            }
        });

        const marker2 = new naver.maps.Marker({
            position: new naver.maps.LatLng(latitude, longitude),
            map: mapInstance,
            icon: {
                url: 'https://github.com/ssssssh0612/ssssssh0612.github.io/assets/120111926/46a6e90b-ad19-4382-a536-6bf9b8fb8458',
                scaledSize: new naver.maps.Size(34, 34)
            },
            visible: false
        });

        setMarker1(marker);
        setMarker2(marker2);

        // Marker 클릭 시 지도 초기화
        naver.maps.Event.addListener(marker, 'click', () => {
            mapInstance?.setCenter(new naver.maps.LatLng(latitude, longitude));
            // mapInstance?.setZoom(16);
            setMarkerDrawerActive(true);
        });

        if (mapInstance) {
            // 지도 클릭 시 MarkerDrawer 컴포넌트 닫기
            naver.maps.Event.addListener(mapInstance, 'click', () => {
                setMarkerDrawerActive(false);
                setDateRecordDrawerActive(false);
            });
        }

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
    }, [latitude, longitude, isMapLoaded]);

    useEffect(() => {
        if (marker1 && marker2) {
            marker1.setVisible(!markerDrawerActive);
            marker2.setVisible(markerDrawerActive);
        }
    }, [markerDrawerActive]);

    return (
        <>
            {/* 위치 정보(지도) */}
            {(isMapLoaded) ?
                (<>
                    <MapContent markerDrawerActive={markerDrawerActive} dateRecordDrawerActive={dateRecordDrawerActive}
                                setDateRecordDrawerActive={setDateRecordDrawerActive}/>
                </>)
                : (<Box sx={{
                    width: '100%', height: 'calc(100vh - 56px)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <CircularProgress/>
                </Box>)}
        </>
    );
}

function MapContent({markerDrawerActive, dateRecordDrawerActive, setDateRecordDrawerActive}: {
    markerDrawerActive: boolean,
    dateRecordDrawerActive: boolean,
    setDateRecordDrawerActive: (active: boolean) => void
}) {
    const [isHovered, setIsHovered] = useState<{
        myInfo: boolean;
        notification: boolean;
    }>({
        myInfo: false,
        notification: false
    });

    const navigate = useNavigate();

    const handleMouseEnter = (name: keyof typeof isHovered) => {
        setIsHovered((prevState) => ({...prevState, [name]: true}));
    };

    const handleMouseLeave = (name: keyof typeof isHovered) => {
        setIsHovered((prevState) => ({...prevState, [name]: false}));
    };

    const toggleDrawer = (active: boolean) => (event: KeyboardEvent | MouseEvent) => {
        if (event && event.type === 'keydown' &&
            ((event as KeyboardEvent).key === 'Tab' || (event as KeyboardEvent).key === 'Shift')) {
            return;
        }

        setDateRecordDrawerActive(active);
    };

    return (
        <Box
            display='flex'
            justifyContent='center'
            alignItems='center'
            position='relative'
            width='100%'
            height='calc(100vh - 56px)'
            overflow='hidden'
        >
            <Box id='map' width='100%' height='100%'/>
            <Fab
                color='inherit'
                size='medium'
                aria-label='myInfo'
                onMouseEnter={() => handleMouseEnter('myInfo')}
                onMouseLeave={() => handleMouseLeave('myInfo')}
                onClick={() => navigate('/setting')}
                sx={{
                    position: 'absolute',
                    left: '10px',
                    top: '10px'
                }}
            >
                {
                    isHovered.myInfo ?
                        <PersonIcon color='primary' sx={{width: '1.5rem', height: '1.5rem'}}/> :
                        <PersonOutlinedIcon color='inherit' sx={{width: '1.5rem', height: '1.5rem'}}/>
                }
            </Fab>
            <Fab
                size='medium'
                color='inherit'
                aria-label='notification'
                onMouseEnter={() => handleMouseEnter('notification')}
                onMouseLeave={() => handleMouseLeave('notification')}
                sx={{
                    position: 'absolute',
                    right: '70px',
                    top: '10px'
                }}
            >
                {
                    isHovered.notification ?
                        <NotificationsIcon color='primary' sx={{width: '1.5rem', height: '1.5rem'}}/> :
                        <NotificationsOutlinedIcon color='inherit' sx={{width: '1.5rem', height: '1.5rem'}}/>
                }
            </Fab>
            <Fab
                size='medium'
                color='inherit'
                aria-label='history'
                onClick={toggleDrawer(true)}
                sx={{
                    position: 'absolute',
                    right: '10px',
                    top: '10px',
                    '&:hover svg': {
                        color: 'primary.main'
                    }
                }}
            >
                <HistoryIcon sx={{width: '1.5rem', height: '1.5rem'}}/>
            </Fab>
            <MarkerDrawer active={markerDrawerActive}/>
            <DateRecordDrawer active={dateRecordDrawerActive} toggleDrawer={toggleDrawer}/>
        </Box>
    );
}

export default MapInformation;