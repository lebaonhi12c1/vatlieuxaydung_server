import mongoose, { Schema } from "mongoose";

const productSchem = new Schema({
    name: String,
    typeproduct: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    },
    quantity: Number,
    price:Number,
    unit: String,
    producerid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Producer'
    },
},{timestamps: true})


export default mongoose.model.Product || mongoose.model('Product',productSchem)