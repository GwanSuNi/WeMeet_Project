import React from 'react';
import {useJoin} from "../../hooks/useJoin";

export default function JoinComponent() {
    // useJoin 훅을 사용
    const {
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
    } = useJoin();

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
            <label>
                Student Name:
                <input type="text" value={nickname} onChange={e => setNickname(e.target.value)}/>
            </label>
            <br/>
            <label>
                Birth:
                <input type="number" value={birth} onChange={e => setBirth(e.target.value)}/>
            </label>
            <br/>
            <label>
                Role:
                <input type="text" value={role} onChange={e => setRole(e.target.value)}/>
            </label>
            <br/>
            <input type="submit" value="Submit"/>
        </form>
    );
}