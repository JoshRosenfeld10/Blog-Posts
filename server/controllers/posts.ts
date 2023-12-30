import PostMessage from "../models/postMessage.ts"
import { Request, Response } from "express";

export const getPosts = async (req: Request, res: Response) => {
    try {
        const postMessages = await PostMessage.find();

        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json({message: (error as Error).message})
    }
}

export const createPost = async (req: Request, res: Response) => {
    const post = req.body;
    
    const newPost = new PostMessage(post);
    console.log(newPost);
    
    try {
        await newPost.save();

        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({message: (error as Error).message})
    }
}
