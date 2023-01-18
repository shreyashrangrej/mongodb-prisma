import express from 'express'
import { getUsers, getUserById, createUser, updateUser, deleteUser } from '../controllers/user'
const router = express.Router()
router.get('/user', getUsers)
router.get('/user/:id', getUserById)
router.post('/user', createUser)
router.put('/user/:id', updateUser)
router.delete('/user/:id', deleteUser)
export default router