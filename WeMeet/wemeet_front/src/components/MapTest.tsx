import {useEffect} from "react";

// 네이버 맵 어떻게 쓰는지 테스트 해본 컴포넌트
export default function MapTest() {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=m00xstj1p1';
        script.async = true;
        document.body.appendChild(script);

        script.onload = () => {
            const mapOptions = {
                center: new naver.maps.LatLng(37.3595704, 127.105399),
                zoom: 10
            };
            const map = new naver.maps.Map('map', mapOptions);
        };

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div id="map" style={{width: '100%', height: '400px'}}></div>
    );
}