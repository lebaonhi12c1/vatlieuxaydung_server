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
    image: {
        type : String,
        default: 'https://img.freepik.com/free-vector/colorful-new-product-composition-with-flat-design_23-2147903423.jpg?w=740&t=st=1681799993~exp=1681800593~hmac=7c25ec3ec89cdaac34827ce92b34772d77857af3e585f55a0423871a9f22460d'
    }
},{timestamps: true})


export default mongoose.model.Product || mongoose.model('Product',productSchem)