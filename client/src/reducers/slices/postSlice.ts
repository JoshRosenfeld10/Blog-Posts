import { createSlice} from "@reduxjs/toolkit";
import PostModel from "../../models/postModel";
import { getPosts, createPost, deletePost, updatePost } from "../../api/actions";

const postsSlice = createSlice({
    name: "posts",
    initialState: [] as PostModel[],
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getPosts.fulfilled, (_state, action) => {
            return action.payload;
        })
        builder.addCase(createPost.fulfilled, (state, action) => {
            return [...state, action.payload];
        })
        builder.addCase(deletePost.fulfilled, (state, action) => {
            return state.filter((post) => post._id !== action.payload);
        })
        builder.addCase(updatePost.fulfilled, (state, action) => {
            const replaceAt = (array: PostModel[], index: number, value: PostModel) => {
                const ret = array.slice(0);
                ret[index] = value;
                return ret;
              }
            return replaceAt(state, state.findIndex((post) => post._id === action.payload._id), action.payload);
            
        })
    }
})

export interface postReducerState {
    posts: PostModel[]
}

export default postsSlice.reducer
