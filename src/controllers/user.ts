import { Request, Response } from 'express'
import prisma from '../lib/prisma'

export const getUsers = async (req: Request, res: Response) => {
    if (Object.keys(req.query).length === 0) {
        try { 
            const users = await prisma.user.findMany()
            res.status(200).json(users)
        } catch (err: any) {
            return res.status(500).json({ message: err.message })
        }
    } else {
        const select = req.query.select as string
        const selectData = select ? select.split(',') : []
        const selectObj = selectData.reduce((acc, val) => {
            return {
                ...acc,
                [val]: true
            }
        }, {})
        try {
            const users = await prisma.user.findMany({
                select: selectObj,
            })
            return res.status(200).json(users)
        } catch (err: any) {
            return res.status(500).json({ message: err.message })
        }
    }
}

export const getUserById = async (req: Request, res: Response) => {
    const user = await prisma.user.findUnique({
        where: {
            id: req.params.id,
        }
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