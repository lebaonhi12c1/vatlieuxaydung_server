import mongoose from "mongoose";


const producerSchema = new mongoose.Schema({
    name: {
        type :String,
        default: ''
    },
    address: {
        type :String,
        default: ''
    },
    phone: {
        type :String,
        default: ''
    },
    fax: {
        type :String,
        default: ''
    },
},{timestamps: true})

export default mongoose.model.Producer || mongoose.model('Producer',producerSchema)