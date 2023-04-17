import mongoose from "mongoose";


const producerSchema = new mongoose.Schema({
    name: String,
    address: String,
    phone: String,
    fax: String,
},{timestamps: true})

export default mongoose.model.Producer || mongoose.model('Producer',producerSchema)