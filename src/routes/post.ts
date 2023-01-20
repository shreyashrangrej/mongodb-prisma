import express from 'express'
import { getPosts, getPostById, createPost, updatePost, deletePost } from '../controllers/post'
const router = express.Router()
router.get('/post', getPosts)
router.get('/post/:id', getPostById)
router.post('/post', createPost)
router.put('/post/:id', updatePost)
router.delete('/post/:id', deletePost)
export default router