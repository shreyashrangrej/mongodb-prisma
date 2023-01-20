import { Request, Response } from 'express'
import prisma from '../lib/prisma'

export const getPosts = async (req: Request, res: Response) => {
    const posts = await prisma.post.findMany()
    res.status(200).json(posts)
}

export const getPostById = async (req: Request, res: Response) => {

}

export const createPost = async (req: Request, res: Response) => {

}
export const updatePost = async (req: Request, res: Response) => {

}

export const deletePost = async (req: Request, res: Response) => {

}