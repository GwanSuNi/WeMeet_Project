import {createSlice} from '@reduxjs/toolkit';

const userNameSlice = createSlice({
    name: 'userNameSlice',
    initialState: {username: ''},
    reducers: {
        setLoginUsername: (state, action) => {
            state.username = action.payload;
        },
    },
});

export const {setLoginUsername} = userNameSlice.actions;

export default userNameSlice;