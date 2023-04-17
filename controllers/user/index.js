import User from "../../models/user/index.js"

const userController = {
    create: async(req,res)=>{
        try {
            const user = await new User(req.body)
            await user.save()
            res.status(200).json(user)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    getAll: async(req,res)=>{
        try {
            const users = await User.find()
            res.status(200).json(users)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    login: async(req,res)=>{
        try {
            const user = await User.findOne({username: req.body.username})
            user ? (
                req.body.password === user.password ? res.status(200).json({login:true,user}) : res.status(400).json({login:false, message: 'Password is not correct!'})
            ):(
                res.status(404).json({login: false,message: 'User not found!'})
            )
        } catch (error) {
            res.status(500).json({login: false,message: error})
        }
    },
    update: async(req,res)=>{
      try {
        // const users = await User.find({username:req.body.username})

        const userupdate = await User.findOneAndUpdate({username: req.body.username},req.body,{new: true})
        res.status(200).json({update: true,user: userupdate, message: 'Update success!'})
      } catch (error) {
        res.status(500).json({update: false,user: null, message: error})
      }  
    },
    delete: async(req,res)=>{
        try {
            const userdelete = await User.findOneAndDelete({_id: req.params.id})
            res.status(200).json({delete: true, message: 'Delete success!',user: userdelete})
        } catch (error) {
            res.status(500).json({delete: true, message: 'Delete fail!',user: null})
        }
    }
}

export default userController