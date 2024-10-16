import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import profileSlice from "./profileSlice";
import blogSlice from "./blogSlice";

export const store = configureStore({
    reducer:{
        auth:authSlice,
        profile:profileSlice,
        blog:blogSlice
    }
});

export default store;
