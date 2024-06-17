import {AxiosResponse} from "axios";
import secInstance from "../utils/secInstance";
import {useEffect, useState} from "react";

export interface UserInfo {
    email: string;
    nickname: string;
    birth: string;
    bloodType: string;
}

export default function useMyInfo() {
    const [userInfo, setUserInfo] = useState<UserInfo>();

    const fetchMyInfo = async () => {
        try {
            const response: AxiosResponse = await secInstance.get('/api/member/myInfo',);
            const data = await response.data;
            setUserInfo(data);
        } catch (error: any) {
            if (error.response && error.response.status === 404) {
                console.error('404 에러: 요청한 리소스를 찾을 수 없습니다.');
            } else {
                console.error('내 정보 불러오기에 실패했습니다:', error);
                setUserInfo(undefined);
            }
        }
    };
    useEffect(() => {
        fetchMyInfo();
    }, []);
    return {userInfo, fetchMyInfo};
}