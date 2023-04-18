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
    },
    image: {
        type: String,
        default: 'https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=740&t=st=1681800321~exp=1681800921~hmac=92c513f04fc03bd4a4f02a4e5f6d630f7f7a2c38e05febf2021523582ad2a104'
    }
},{timestamps:true})

export default mongoose.model.Employee || mongoose.model('Employee',employeeSchema)