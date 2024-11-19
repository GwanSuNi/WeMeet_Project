import {useEffect, useState} from "react";
import secInstance from "../utils/secInstance";
import {AxiosResponse} from "axios";
import {useSelector} from "react-redux";
import {RootState} from "../redux/store";
import useUserInfo from "./useUserInfo";

export interface CoupleInfo {
    user1Email?: string;
    user2Email?: string;
    user1Name?: string;
    user2Name?: string;
    user1Birth?: string;
    user2Birth?: string;
    user1BloodType?: string;
    user2BloodType?: string;
    coupleDate?: Date;
}

// 현재 로그인한 사용자의 커플 정보를 불러오는 커스텀 훅
// 만약 커플이 아니라면, 상대 정보가 없는 상태로 초기화
export function useCoupleInfo() {
    const loginUsername = useSelector((state: RootState) => state.username.username);
    const {userInfo, fetchUserInfo} = useUserInfo();
    const [isFetched, setIsFetched] = useState(false);

    const initialCoupleInfo: CoupleInfo = {
        user1Email: userInfo?.email,
        user1Name: userInfo?.nickname,
        user1Birth: userInfo?.birth,
        user1BloodType: userInfo?.bloodType,
        user2Email: '',
        user2Name: '',
        user2Birth: '',
        user2BloodType: '',
        coupleDate: undefined,
    };
    const [coupleInfo, setCoupleInfo] = useState<CoupleInfo>(initialCoupleInfo);
    const fetchCoupleInfo = async () => {
        try {
            const response: AxiosResponse = await secInstance.get('/api/couple', {
                headers: {
                    'Content-Type': 'application/json',
                },
                params: {
                    userEmail: loginUsername,
                }
            });
            const data = await response.data;
            setCoupleInfo(data);
            setIsFetched(true); // 호출 완료 상태 설정
        } catch (error: any) {
            if (error.response && error.response.status === 404) {
                fetchUserInfo();
                setCoupleInfo((prev) => ({
                    user1Email: userInfo?.email || '',
                    user1Name: userInfo?.nickname || '',
                    user1Birth: userInfo?.birth || '',
                    user1BloodType: userInfo?.bloodType || '',
                    user2Email: '',
                    user2Name: '',
                    user2Birth: '',
                    user2BloodType: '',
                    coupleDate: undefined,
                }));
                setIsFetched(true); // 호출 완료 상태 설정
            } else {
                console.error('커플 정보를 불러오기에 실패했습니다:', error);
            }
        }
    }

    useEffect(() => {
        if (!isFetched && userInfo) {
            // 호출 전 상태이고, userInfo가 존재할 때만 실행
            fetchCoupleInfo();
        }
    }, [userInfo, isFetched]); // 호출 여부와 userInfo에 의존

    return {coupleInfo, setCoupleInfo, fetchCoupleInfo};
}