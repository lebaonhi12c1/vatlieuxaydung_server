import mongoose from "mongoose";

const UserSchema =  new  mongoose.Schema({
    username: String,
    password: String,
    name: String,
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

export default mongoose.User.model|| mongoose.model('User',UserSchema)