require('dotenv').config()
import express from 'express'
import router from './routes/index'
const app = express()
app.use(express.json())
app.use('/', router)
app.use((req, res, next) => {
    res.status(404);
    res.send({
        error: "Invaild Route or the Route does not exist."
    })
})
const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`Server running on Port: ${port}`)
})