import express from 'express'
import { getPosts, createPost, editPost } from '../controllers/posts.ts';

const router = express.Router();

router.get('/', getPosts);
router.post('/', createPost);
router.get('/:id', editPost)


export default router;
