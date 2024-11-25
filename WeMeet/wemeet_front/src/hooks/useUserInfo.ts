import {AxiosResponse} from "axios";
import secInstance from "../utils/secInstance";
import {useEffect, useState} from "react";

export interface UserInfo {
    email: string;
    nickname: string;
    birth: string;
    bloodType: string;
}

export default function useUserInfo() {
    const [userInfo, setUserInfo] = useState<UserInfo>();

    const fetchUserInfo = async () => {
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
        fetchUserInfo();
    }, []);

    const updateUserInfo = async (updatedInfo: Partial<UserInfo>) => {
        try {
            const response: AxiosResponse = await secInstance.put('/api/member/myInfo', updatedInfo, {
                headers: { "Content-Type": "application/json" },
            });
            const updatedData = response.data;
            setUserInfo((prev) => ({
                ...prev,
                ...updatedData, // 업데이트된 데이터만 덮어쓰기
            }));
            console.log("내 정보가 성공적으로 수정되었습니다:", updatedData);
        } catch (error: any) {
            if (error.response) {
                console.error(`수정 실패: ${error.response.status} - ${error.response.data}`);
            } else {
                console.error("내 정보 수정 중 오류 발생:", error);
            }
        }
    };

    return {userInfo, fetchUserInfo, updateUserInfo};
}