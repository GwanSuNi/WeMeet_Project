import {configureStore} from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import usernameSlice from "./usernameSlice";
import signUpSlice from "./SignUpSlice";

const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        username: usernameSlice.reducer,
        signUp: signUpSlice.reducer,
    },
});
export type RootState = ReturnType<typeof store.getState>;
export default store;