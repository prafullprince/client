import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    token: localStorage.getItem("token") ? JSON.parse(localStorage.getItem("token")) : null,
    signUpData: null
}

const authSlice = createSlice({
    name:"auth",
    initialState:initialState,
    reducers:{
        setToken(state,action){
            state.token = action.payload;
        },
        setSignUpData(state,action){
            state.signUpData = action.payload;
        }
    }
});
export const { setToken,setSignUpData } = authSlice.actions;
export default authSlice.reducer;
