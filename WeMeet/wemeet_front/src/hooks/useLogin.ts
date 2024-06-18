import {FormEvent, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import loginInstance from "../utils/loginInstance";
import {useDispatch} from "react-redux";
import {setLoginUsername} from "../redux/usernameSlice";

export function useLogin() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();
        // console.log('useLogin의 ', username);
        const formData = new FormData();
        formData.append('username', username);
        formData.append('password', password);

        try {
            await loginInstance.post('/api/login', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            dispatch(setLoginUsername(username));
            navigate('/');
        } catch (error) {
            console.log(username);
            console.error(error);
        }
    };

    return {username, setUsername, password, setPassword, handleSubmit};
}