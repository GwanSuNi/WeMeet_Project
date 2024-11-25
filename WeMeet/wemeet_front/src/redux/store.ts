import {configureStore} from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import usernameSlice from "./usernameSlice";
import signUpSlice from "./SignUpSlice";
import snackbarSlice from "./snackbarSlice";
import coupleInfoSlice from "./coupleInfoSlice";

const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        username: usernameSlice.reducer,
        signUp: signUpSlice.reducer,
        snackbar: snackbarSlice.reducer,
        coupleInfo: coupleInfoSlice,
    },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;