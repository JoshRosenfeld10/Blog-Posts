import { Dispatch } from "redux";
import * as api from "../api"
import { PostData } from "../components/Form/Form";
import { get, create } from "../reducers/postSlice";

// Action Creators
export const getPosts = () => async (dispatch: Dispatch) => {
    try {
        const data = await api.fetchPosts();
        dispatch(get(data));
    } catch (error) {
        console.log((error as Error).message);
    }
}

export const createPost = (post: PostData) => async (dispatch: Dispatch) => {
    try {
        const data = await api.createPost(post)
        dispatch(create(data))
    } catch (error) {
        console.log((error as Error).message);
    }
}

export type ActionType = typeof getPosts;
