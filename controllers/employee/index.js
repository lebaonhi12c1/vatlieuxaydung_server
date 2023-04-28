import Employee from '../../models/employee/index.js'
import {useRespone} from '../../hooks/index.js'
const EmployeeController = {
    create: async(req,res)=>{
        try {
            const user = await new Employee(req.body)
            await user.save()
            res.status(200).json(useRespone(true,'Create success!',user))
        } catch (error) {
            res.status(500).json(error)
        }
    },
    update: async(req,res)=>{
        try {
            // const users = await User.find({username:req.body.username})
    
            const userupdate = await Employee.findOneAndUpdate({_id: req.body._id},req.body,{new: true})
            res.status(200).json(useRespone(true,'Update success',userupdate))
          } catch (error) {
            res.status(500).json(useRespone(false,error,null))
          }  
    },
    delete: async(req,res)=>{
        try {
            const userdelete = await Employee.findOneAndDelete({_id: req.params.id})
            res.status(200).json(useRespone(true,'Delete success!',userdelete))
        } catch (error) {
            res.status(500).json(useRespone(false,error,null))
        }
    },
    getall: async(req,res)=>{
        try {
            const users = await Employee.find()
            res.status(200).json(users)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    login: async(req,res)=>{
        try {
            const employee = await Employee.findOne({username: req.body.username})
            console.log(employee)
            if(!employee){
                return res.status(404).json(useRespone(false,'User not found!',null))
            }
            if(employee.password!== req.body.password){
                return res.status(404).json(useRespone(false,'Wrong password!',null))
            }
            res.status(200).json(useRespone(true,'Login success!',employee))
        } catch (error) {
            res.status(500).json(useRespone(false,error,null))
        }
    }
}
export default EmployeeController