import { createSlice} from "@reduxjs/toolkit";
import PostModel from "../models/postModel";
import { getPosts, createPost } from "../api/actions";

const postsSlice = createSlice({
    name: "posts",
    initialState: [] as PostModel[],
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getPosts.fulfilled, (state, action) => {
            return action.payload;
        })
        builder.addCase(createPost.fulfilled, (state, action) => {
            return [...state, action.payload]
        })
    }
})

export interface reducerState {
    posts: PostModel[]
}

export default postsSlice.reducer
