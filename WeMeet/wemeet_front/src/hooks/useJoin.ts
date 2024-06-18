import {FormEvent} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import {RootState} from "../redux/store";
import {useSelector} from "react-redux";

export function useJoin() {
    const navigate = useNavigate();
    const signUpState = useSelector((state: RootState) => state.signUp);

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();

        // signUpState.birth가 undefined인지 확인
        if (!signUpState.birth) {
            console.error('Birth date is not defined');
            return;
        }

        // TODO: 일단 임시로 날짜 형식 맞췄음. 추후 모든 DB에서 -를 사용하게 하는 것도 고민해봐야 함.
        // 날짜 형식 변환: 'YYYY-MM-DD' -> 'YYYYMMDD'
        const [year, month, day] = signUpState.birth.split('-');
        const birth = `${year}${month.padStart(2, '0')}${day.padStart(2, '0')}`;

        const axiosInstance = axios.create({
            baseURL: 'http://localhost:8080'
        });

        console.log(signUpState);
        try {
            const response = await axiosInstance.post('/api/join', {...signUpState, birth, role: 'MEMBER'});
            if (response.status === 200) {
                navigate('/login');
                return response.data;
            }
        } catch (error) {
            console.error(error);
        }
    };

    return {
        handleSubmit
    };
}