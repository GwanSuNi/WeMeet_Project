import React, {useState, useEffect} from 'react';
import {Fab, Skeleton} from "@mui/material";
import Box from "@mui/material/Box";
import CreateIcon from '@mui/icons-material/Create';

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
                position: naver.maps.Position.TOP_RIGHT,
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
                {(isMapLoaded) ? (<Box sx={{width: '100%',  height: 'calc(100vh - 56px)',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center', // 수평 가운데 정렬
                        alignItems: 'center',}}><div id="map" style={{width: '100%', height: 'calc(100vh - 56px)'}}/>
                        <Fab variant="extended" size="medium" color="primary" sx={{
                            position: 'absolute', // 절대 위치 설정
                            bottom: '80px', // 하단 여백
                        }}>
                            <CreateIcon sx={{ mr: 1 }} />
                            일지 작성
                        </Fab>
                    </Box>)
                    : (<Box sx={{width: '100%',  height: 'calc(100vh - 56px)',
                        display: 'flex',
                        justifyContent: 'center', // 수평 가운데 정렬
                        alignItems: 'center',}}>
                        <Skeleton sx={{bgcolor: 'whitesmoke', height:'calc(100vh - 56px)'}}variant="rectangular" animation={'wave'} width={'100rem'}/></Box>)}

            </div>
        </>
    );
}

export default MapInformation;