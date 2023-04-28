import Employee from '../../models/employee/index.js'
import {useRespone} from '../../hooks/index.js'
import User from '../../models/user/index.js'
import Order from '../../models/order/index.js'
import Product from '../../models/product/index.js'
const orderController = {
    create: async(req,res)=>{
        try {
            const order_customer = await User.findOne({_id: req.body.customerid})
            var products = []
            for (let index = 0; index < req.body.productid.length; index++) {
                const element = await Product.findOne({_id: req.body.productid[index]})
                products.push(element)
            }
            if(order_customer && products.length === req.body.productid.length){
                const user = await new Order({
                    ...req.body,
                    productid: products,
                    customerid: order_customer
                })
                await user.save()
                return res.status(200).json(useRespone(true,'Create success!',user))
            }
            res.status(400).json(useRespone(false,'Not found Customer or Product!',))
        } catch (error) {
            res.status(500).json(error)
        }
    },
    update: async(req,res)=>{
        console.log(req.body)
        try {
            const product_producer = await Employee.findOne({_id: req.body.employeeid})
            const product_category = await User.findOne({_id: req.body.customerid})
            if(product_producer && product_category){
                const user = await Order.findOneAndUpdate({_id: req.body._id},{
                    ...req.body,
                    employeeid: product_producer,
                    customerid: product_category
                },{new: true})
               return res.status(200).json(useRespone(true,'Update success!',user))
            }
            res.status(400).json(useRespone(false,'Not found Producer or Category!',))
          } catch (error) {
            res.status(500).json(useRespone(false,error,null))
          }  
    },
    delete: async(req,res)=>{
        try {
            const userdelete = await Order.findOneAndDelete({_id: req.params.id})
            res.status(200).json(useRespone(true,'Delete success!',userdelete))
        } catch (error) {
            res.status(500).json(useRespone(false,error,null))
        }
    },
    getall: async(req,res)=>{
        try {
            const users = await Order.find().populate(['customerid','employeeid','productid'])
            res.status(200).json(users)
        } catch (error) {
            res.status(500).json(error)
        }
    },
}
export default orderController