import mongoose from "mongoose";
import PostMessage from "../models/postMessage.js"
import { Request, Response } from "express";
import PostModel from "../models/postModel.js";

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

export const updatePost = async (req: Request, res: Response) => {
    // /posts/:id
    const { id } = req.params;
    const newPost = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send('No post found with the given ID.');
    }
    
    const updatedPost = await PostMessage.findByIdAndUpdate(id, newPost, { new: true });

    res.json(updatedPost);
} 

export const deletePost = async (req: Request, res: Response) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send('No post found with the given ID.');
    }

    await PostMessage.findByIdAndDelete(id);

    res.json(id);
}
