import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema({
    username: String,
    password: String,
    name: {
        type: String,
        default : ''
    },
    email: {
        type: String,
        default : ''
    },
    address: {
        type: String,
        default : ''
    },
    phone: {
        type: String,
        default : ''
    },
    position:{
        type: String,
        enum: ['Basic','Manager'],
        default: 'Basic'
    }
},{timestamps:true})

export default mongoose.model.Employee || mongoose.model('Employee',employeeSchema)