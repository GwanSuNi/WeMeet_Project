import { createSlice } from "@reduxjs/toolkit";
const bottomNavSlice = createSlice({
    name: "bottomNavSlice",
    initialState: { value: 1 },
    reducers: {
        change: (state, action) => {
            state.value = action.payload;
        },
    },
});
export default bottomNavSlice;
export const { change } = bottomNavSlice.actions;
