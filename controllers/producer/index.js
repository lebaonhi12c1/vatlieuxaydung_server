import Producer from '../../models/producer/index.js'
import {useRespone} from '../../hooks/index.js'
const producerController = {
    create: async(req,res)=>{
        try {
            const user = await new Producer(req.body)
            await user.save()
            res.status(200).json(useRespone(true,'Create success!',user))
        } catch (error) {
            res.status(500).json(error)
        }
    },
    update: async(req,res)=>{
        try {
            // const users = await User.find({username:req.body.username})
    
            const userupdate = await Producer.findOneAndUpdate({_id: req.body._id},req.body,{new: true})
            res.status(200).json(useRespone(true,'Update success',userupdate))
          } catch (error) {
            res.status(500).json(useRespone(false,error,null))
          }  
    },
    delete: async(req,res)=>{
        try {
            const userdelete = await Producer.findOneAndDelete({_id: req.params.id})
            res.status(200).json(useRespone(true,'Delete success!',userdelete))
        } catch (error) {
            res.status(500).json(useRespone(false,error,null))
        }
    },
    getall: async(req,res)=>{
        try {
            const users = await Producer.find()
            res.status(200).json(users)
        } catch (error) {
            res.status(500).json(error)
        }
    },
}
export default producerController