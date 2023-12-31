import mongoose from "mongoose";
import PostMessage from "../models/postMessage.ts"
import { Request, Response } from "express";
import PostModel from "../models/postModel.ts";

export const getPosts = async (req: Request, res: Response) => {
    try {
        const postMessages = await PostMessage.find() as PostModel[];

        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json({message: (error as Error).message})
    }
}

export const createPost = async (req: Request, res: Response) => {
    const post = req.body;
    
    const newPost = new PostMessage(post);
    
    try {
        await newPost.save();

        res.status(201).json(newPost as PostModel);
    } catch (error) {
        res.status(409).json({message: (error as Error).message})
    }
}

export const editPost = async (req: Request, res: Response) => {
    // /posts/:id
    const { id: _id } = req.params;
    const post = req.body;

    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).send('No post found with the given ID.');
    }
    
    const updatedPost = await PostMessage.findByIdAndUpdate(_id, post, { new: true });

    res.json(updatedPost);
} 
