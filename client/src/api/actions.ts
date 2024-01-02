import { PostData } from "../components/Form/Form";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { ObjectId } from "mongodb";

const url = 'http://localhost:3000/posts'

export const getPosts = createAsyncThunk('posts/getPosts', async () => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log((error as Error).message);
    }
})

export const createPost = createAsyncThunk('posts/createPosts', async (createdPost: PostData) => {
    try {
        const config = {
            method: "POST",
            headers: {
              Application: "application/json",
              "Content-Type": "application/json",
            },
            // Expected Payload (The request body)
            body: JSON.stringify({
              author: createdPost.author,
              title: createdPost.title,
              message: createdPost.message,
              tags: createdPost.tags,
              selectedFile: createdPost.selectedFile
            }),
          };
    
          const response = await fetch(url, config);
          const data = await response.json();
          return data;
    } catch (error) {
        console.log((error as Error).message);
    }
})

export const deletePost = createAsyncThunk('posts/deletePost', async (id: ObjectId) => {
    try {
        const config = {
            method: "DELETE",
            headers: {
              Application: "application/json",
              "Content-Type": "application/json",
            }}
            
        const response = await fetch(`${url}/${id}`, config);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log((error as Error).message);
    }
})
