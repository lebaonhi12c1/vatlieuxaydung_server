import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    name: {
        type :String,
        default: ''
    },
},{timestamps: true})


export default mongoose.model.Category || mongoose.model('Category',categorySchema)