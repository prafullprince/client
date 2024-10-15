import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    user: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null,
    image: localStorage.getItem("image") ? JSON.parse(localStorage.getItem("image")) : null,
}

const profileSlice = createSlice({
    name:"profile",
    initialState:initialState,
    reducers:{
        setUser(state,action){
            state.token = action.payload;
        },
    }
});
export const { setUser } = profileSlice.actions;
export default profileSlice.reducer;
