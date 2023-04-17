import mongoose from "mongoose";


const saleSchema = new mongoose.Schema({
    productid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    }
    ,
    orderid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Order'
    }
    ,
    quantity: {
        type :Number,
        default: 0
    },
    price: {
        type :Number,
        default: 0
    },
},{timestamps: true})


export default mongoose.model.Sale || mongoose.model('Sale',saleSchema)