import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    step: localStorage.getItem("step") ? JSON.parse(localStorage.getItem("step")) : 1,
    blog: null,
}

const blogSlice = createSlice({
    name:"blog",
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
