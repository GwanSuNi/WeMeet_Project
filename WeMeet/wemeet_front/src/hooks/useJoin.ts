import {FormEvent, useState} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

export function useJoin() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [nickname, setNickname] = useState('');
    const [birth, setBirth] = useState('');
    const [role, setRole] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();

        const joinData = {
            username,
            password,
            nickname,
            birth,
            role
        };
        const axiosInstance = axios.create({
            baseURL: 'http://localhost:8080'
        });

        console.log(joinData);
        try {
            const response = await axiosInstance.post('/api/join', joinData);
            if (response.status === 200) {
                alert('회원가입 성공');
                setUsername('');
                setPassword('');
                setNickname('');
                setBirth('');
                setRole('');
                navigate('/login');
            }
        } catch (error) {
            console.error(error);
        }
    };

    return {
        username,
        password,
        nickname,
        birth,
        role,
        setUsername,
        setPassword,
        setNickname,
        setBirth,
        setRole,
        handleSubmit
    };
}