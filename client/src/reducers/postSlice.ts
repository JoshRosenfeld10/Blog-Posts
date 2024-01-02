import { createSlice} from "@reduxjs/toolkit";
import PostModel from "../models/postModel";
import { getPosts, createPost, deletePost } from "../api/actions";

const postsSlice = createSlice({
    name: "posts",
    initialState: [] as PostModel[],
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getPosts.fulfilled, (state, action) => {
            return action.payload;
        })
        builder.addCase(createPost.fulfilled, (state, action) => {
            return [...state, action.payload];
        })
        builder.addCase(deletePost.fulfilled, (state, action) => {
            return state.filter((post) => post._id !== action.payload);
        })
    }
})

export interface reducerState {
    posts: PostModel[]
}

export default postsSlice.reducer
