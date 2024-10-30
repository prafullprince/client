import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    step: localStorage.getItem("step") && localStorage.getItem("step") !== "undefined"  ? JSON.parse(localStorage.getItem("step")) : 1,
    blog: localStorage.getItem("blog") && localStorage.getItem("blog") !== "undefined" ? JSON.parse(localStorage.getItem("blog")) : null,
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
        }
    }
});
export const { setStep,setBlog } = blogSlice.actions;
export default blogSlice.reducer;
