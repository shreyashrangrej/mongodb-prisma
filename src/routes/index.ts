import express from "express"
const router = express.Router()
import postRouter from './post'
import userRouter from './user'
router.use('/api', postRouter)
router.use('/api', userRouter)
export default router