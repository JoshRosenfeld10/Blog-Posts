import { createSlice } from "@reduxjs/toolkit";
import PostModel from "../models/postModel";

const postsSlice = createSlice({
    name: "posts",
    initialState: [] as PostModel[],
    reducers: {
        get: (state, action) => {
            return action.payload;
        },
        create: (state, action) => {
            return [...state, action.payload];
        }
    }
})

export interface reducerState {
    posts: typeof postsSlice
}

export const { get, create } = postsSlice.actions
export default postsSlice.reducer
