import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SignupState {
    method?: string;
    username?: string;
    password?: string;
    nickname?: string;
    birth?: string;
    bloodType?: string;
    role?: string;
}

const initialState: SignupState = {};

const signupSlice = createSlice({
    name: 'signup',
    initialState,
    reducers: {
        setMethod: (state, action: PayloadAction<string>) => {
            state.method = action.payload;
        },
        setUsername: (state, action: PayloadAction<string>) => {
            state.username = action.payload;
        },
        setPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload;
        },
        setNickname: (state, action: PayloadAction<string>) => {
            state.nickname = action.payload;
        },
        setBirth: (state, action: PayloadAction<string>) => {
            state.birth = action.payload;
        },
        setBloodType: (state, action: PayloadAction<string>) => {
            state.bloodType = action.payload;
        },
        setRole: (state, action: PayloadAction<string>) => {
            state.role = action.payload;
        }
    }
});

export const { setMethod, setUsername, setPassword, setNickname, setBirth, setBloodType, setRole } = signupSlice.actions;
export default signupSlice;