import { Request, Response } from 'express'
import prisma from '../lib/prisma'

export const getUsers = async (req: Request, res: Response) => {
    const users = await prisma.user.findMany()
    res.status(200).json(users)
}

export const getUserById = async (req: Request, res: Response) => {
    const user = await prisma.user.findUnique({
        where: {
            id: req.params.id,
        },
    })
    res.status(200).json(user)
}

export const createUser = async (req: Request, res: Response) => {
    const user = await prisma.user.create({
        data: {
            email: req.body.email,
            name: req.body.name,
        },
    })
    res.status(200).json(user)
}

export const updateUser = async (req: Request, res: Response) => {
    const user = await prisma.user.update({
        data: {
            email: req.body.email,
            name: req.body.name
        },
        where: {
            id: req.params.id,
        },
    })
    res.status(200).json(user)
}

export const deleteUser = async (req: Request, res: Response) => {
    const user = await prisma.user.delete({
        where: {
            id: req.params.id,
        },
    })
    res.status(200).json(user)
}