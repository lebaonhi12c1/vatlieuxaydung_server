import user from "../../models/user"

const userController = {
    create: async(req,res)=>{
        try {
            const user = await new user({
                username: req.body.username,
                password: req.body.password,
                fristname:'',
                lastname: '',
                email: '',
                sdt: '',
                address:'',
                position: '',
            })
            await user.save()
            res.status(200).json(user)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    getAll: async(req,res)=>{
        try {
            const users = await user.find()
            res.status(200).json(users)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    login: async(req,res)=>{
        try {
            const user = await user.findOne({username: req.body.username})
            user ? (
                req.body.password === user.password ? res.status(200).json({login:true,user}) : res.status(400).json({login:false, message: 'Password is not correct!'})
            ):(
                res.status(404).json({login: false,message: 'User not found!'})
            )
        } catch (error) {
            res.status(500).json({login: false,message: error})
        }
    }
}

export default userController