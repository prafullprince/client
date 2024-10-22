import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    step: localStorage.getItem("step") ? JSON.parse(localStorage.getItem("step")) : 1,
    blog: localStorage.getItem("blog") ? JSON.parse(localStorage.getItem("blog")) : null,
    likeKey: localStorage.getItem("like") ? JSON.parse(localStorage.getItem("like")) : false,
}

const blogSlice = createSlice({
    name:"blogs",
    initialState:initialState,
    reducers:{
        setStep(state,action){
            state.step = action.payload;
        },
        setBlog(state,action){
            state.blog = action.payload;
        },
        setLikeKey(state,action){
            state.likeKey = action.payload;
        }
    }
});
export const { setStep,setBlog,setLikeKey } = blogSlice.actions;
export default blogSlice.reducer;
