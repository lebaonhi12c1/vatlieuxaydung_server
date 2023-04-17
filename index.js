import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
dotenv.config()
const app = express()
const PORT = process.env.PORT || 5000

app.use(bodyParser.json())
app.use(cors())
mongoose.connect(process.env.MONGGODB).then(()=>{
    console.log('Connect to mongodb success...')
    app.listen(PORT,()=>{
        console.log('Server is running...')
    })
})