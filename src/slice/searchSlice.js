import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    blogs: []
}

const searchSlice = createSlice({
    name:"search",
    initialState:initialState,
    reducers:{
        setBlogs(state,action){
            const blogsAvailable = action.payload;
            state.blogs.push(blogsAvailable);
        }
    }
});
export const { setBlogs } = searchSlice.actions;
export default searchSlice.reducer;
