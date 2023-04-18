import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import UserRouter from './router/user/index.js'
import producerRouter from './router/producer/index.js'
import categoryRouter from './router/category/index.js'
import ProductRouter from './router/product/index.js'
import EmployeeRouter from './router/employee/index.js'
import orderRouter from './router/order/index.js'
dotenv.config()
const app = express()
const PORT = process.env.PORT || 5000

app.use(bodyParser.json())
app.use(cors())
app.use('/user',UserRouter)
app.use('/producer',producerRouter)
app.use('/category',categoryRouter)
app.use('/product',ProductRouter)
app.use('/employee',EmployeeRouter)
app.use('/order',orderRouter)
mongoose.connect(process.env.MONGGODB).then(()=>{
    console.log('Connect to mongodb success...')
    app.listen(PORT,()=>{
        console.log('Server is running...')
    })
})