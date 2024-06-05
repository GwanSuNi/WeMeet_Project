import { configureStore } from "@reduxjs/toolkit";
import bottomNavSlice from "./features/bottomNav/bottomNavSlice";
const store = configureStore({
    reducer: {
        bottomNav: bottomNavSlice.reducer,
    },
});
export default store;
