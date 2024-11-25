import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    user: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null,
    image: localStorage.getItem("image") ? JSON.parse(localStorage.getItem("image")) : null,
    userDetails: localStorage.getItem("users") ? JSON.parse(localStorage.getItem("users")) : null
}

const profileSlice = createSlice({
    name:"profile",
    initialState:initialState,
    reducers:{
        setUser(state,action){
            state.user = action.payload;
        },
        setImage(state,action){
            state.image = action.payload;
        },
        setUserDetails(state,action){
            state.userDetails = action.payload;
        }
    }
});
export const { setUser,setImage,setUserDetails } = profileSlice.actions;
export default profileSlice.reducer;
