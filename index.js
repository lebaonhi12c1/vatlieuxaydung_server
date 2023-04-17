import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import UserRouter from './router/user/index.js'
import producerRouter from './router/producer/index.js'
dotenv.config()
const app = express()
const PORT = process.env.PORT || 5000

app.use(bodyParser.json())
app.use(cors())
app.use('/user',UserRouter)
app.use('/producer',producerRouter)
mongoose.connect(process.env.MONGGODB).then(()=>{
    console.log('Connect to mongodb success...')
    app.listen(PORT,()=>{
        console.log('Server is running...')
    })
})