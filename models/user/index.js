import mongoose from "mongoose";

const UserSchema =  new  mongoose.Schema({
    username: {
        type: String,
    },
    password: {
        type: String,
    },
    name: {
        type: String,
    },
    email: {
        type: String,
        default: '',
    },
    phone: {
        type: String,
        default: '',
    },
    address:{
        type: String,
        default: '',
    },
},{timestamps:true})

export default mongoose.model.User|| mongoose.model('User',UserSchema)