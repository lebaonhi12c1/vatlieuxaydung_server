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
    sumary: {
        type :Number,
        default: 0
    },
    vat: {
        type :Number,
        default: 0
    },
    debt: {
        type :Number,
        default: 0
    },
    status: {
        type: String,
        enum: ['pending', 'confirmed', 'delivered', 'canceled'],
        default: 'pending'
    }
},{timestamps: true})

export default mongoose.model.Order || mongoose.model('Order',orderSchema)