import {configureStore} from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import usernameSlice from "./usernameSlice";

const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        username: usernameSlice.reducer,
    },
});
export type RootState = ReturnType<typeof store.getState>;
export default store;