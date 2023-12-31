import { ObjectId } from 'mongodb';

export default interface PostModel {
    title: string,
    message: string,
    author: string,
    tags: string[],
    selectedFile: string,
    likeCount: number,
    createdAt: Date,
    _id?: ObjectId,
    __v?: number
}
