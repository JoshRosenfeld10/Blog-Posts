import axios from "axios";
import { PostData } from "../components/Form/Form";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { ObjectId } from "mongodb";

const url = 'http://localhost:3000/posts'

export const getPosts = createAsyncThunk('posts/getPosts', async () => {
    const response = await axios.get(url);
    return response.data
})

export const createPost = createAsyncThunk('posts/createPosts', async (createdPost: PostData) => {
    const response = await axios.post(url, createdPost);
    return response.data;
})


export const deletePost = createAsyncThunk('posts/deletePost', async (id: ObjectId) => {
    const response = await axios.delete(`${url}/${id}`);
    return response.data;
})

export const updatePost = createAsyncThunk('posts/updatePost', async (data: {id: ObjectId, updatedPost: PostData}) => {
    const response = await axios.patch(`${url}/${data.id}`, data.updatedPost);
    return response.data;
})
