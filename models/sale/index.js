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
    quantity: Number,
    price: Number,
},{timestamps: true})


export default mongoose.model.Sale || mongoose.model('Sale',saleSchema)