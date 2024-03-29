import mongoose from 'mongoose'

const postSchema = new mongoose.Schema({
    title: String,
    message: String,
    author: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;
