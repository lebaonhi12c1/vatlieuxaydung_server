import mongoose from "mongoose";

const orderSchema = mongoose.Schema({
    customerid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    employeeid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Employee'
    },
    sumary: Number,
    vat: Number,
    debt: Number,
    status: {
        type: String,
        enum: ['pending', 'confirmed', 'delivered', 'canceled'],
        default: 'pending'
    }
},{timestamps: true})