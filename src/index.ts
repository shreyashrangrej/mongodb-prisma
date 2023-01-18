import express from 'express'
import prisma from './lib/prisma'
const app = express()
app.use(express.json())
app.get('/', (req, res) => {
    res.send('Hello, World!')
})
app.get('/user', async (req, res) => {
    const users = await prisma.user.findMany()
    res.send(users)
})
const port = 3000
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`)
})