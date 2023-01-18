require('dotenv').config()
import express from 'express'
import router from './routes/user'
const app = express()
app.use(express.json())
app.use('/api', router)
app.get('/', (req, res) => {
    res.send('Hello, World!')
})
const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`Server running on Port: ${port}`)
})