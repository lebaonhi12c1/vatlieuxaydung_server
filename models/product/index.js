import mongoose, { Schema } from "mongoose";

const productSchem = new Schema({
    name: {
        type :String,
        default: ''
    },
    categoryid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    },
    quantity: {
        type: Number,
        default: 0
    },
    price:{
        type: Number,
        default: 0
    },
    unit: String,
    producerid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Producer'
    },
},{timestamps: true})


export default mongoose.model.Product || mongoose.model('Product',productSchem)