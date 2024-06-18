import React from 'react';
import {useLogin} from "../../hooks/useLogin";

export default function LoginComponent() {
    const {username, setUsername, password, setPassword, handleSubmit } = useLogin();

    return (
        <form onSubmit={handleSubmit} encType={"multipart/form-data"}>
            <label>
                Username:
                <input type="text" value={username} onChange={e => setUsername(e.target.value)}/>
            </label>
            <br/>
            <label>
                Password:
                <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>
            </label>
            <br/>
            <input type="submit" value="Submit"/>
        </form>
    );
}