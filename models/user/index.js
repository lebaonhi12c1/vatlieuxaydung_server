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
    image: {
        type: String,
        default: 'https://img.freepik.com/free-vector/illustration-businessman_53876-5856.jpg?w=740&t=st=1681719254~exp=1681719854~hmac=6dbd6153f014878f9b254ceb83f8471f3810c5a8520d6b7acbbbdb7ccfa1a937'
    }
},{timestamps:true})

export default mongoose.model.User|| mongoose.model('User',UserSchema)