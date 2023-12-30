import { Dispatch } from "redux";
import * as api from "../api"
import { PostData } from "../components/Form/Form";

// Action Creators
export const getPosts = () => async (dispatch: Dispatch) => {
    try {
        const data = await api.fetchPosts();
        dispatch({ type: 'FETCH_ALL', payload: data });
    } catch (error) {
        console.log((error as Error).message);
    }
}

export const createPost = (post: PostData) => async (dispatch: Dispatch) => {
    try {
        const data = await api.createPost(post)
        dispatch({ type: 'CREATE', payload: data })
    } catch (error) {
        console.log((error as Error).message);
    }
}

export type ActionType = typeof getPosts;
