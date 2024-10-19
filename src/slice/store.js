import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import profileSlice from "./profileSlice";
import blogSlice from "./blogSlice";
import searchSlice from "./searchSlice";

export const store = configureStore({
    reducer:{
        auth:authSlice,
        profile:profileSlice,
        blogs:blogSlice,
        search:searchSlice
    }
});

export default store;
