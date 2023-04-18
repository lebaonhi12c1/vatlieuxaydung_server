
import {useRespone} from '../../hooks/index.js'
import Sale from '../../models/sale/index.js'
import Order from '../../models/order/index.js'
import Product from '../../models/product/index.js'
const SaleController = {
    create: async(req,res)=>{
        try {
            const Sale_employee = await Order.findOne({_id: req.body.orderid})
            const Sale_customer = await Product.findOne({_id: req.body.productid})
            if(Sale_employee && Sale_customer){
                const user = await new Sale({
                    ...req.body,
                    orderid: Sale_employee,
                    productid: Sale_customer
                })
                await user.save()
                return res.status(200).json(useRespone(true,'Create success!',user))
            }
            res.status(400).json(useRespone(false,'Not found Customer or Employee!',))
        } catch (error) {
            res.status(500).json(error)
        }
    },
    update: async(req,res)=>{
        try {
            const product_producer = await Order.findOne({_id: req.body.orderid})
            const product_category = await Product.findOne({_id: req.body.productid})
            if(product_producer && product_category){
                const user = await Sale.findOneAndUpdate({_id: req.body._id},{
                    ...req.body,
                    orderid: product_producer,
                    productid: product_category
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
            const userdelete = await Sale.findOneAndDelete({_id: req.params.id})
            res.status(200).json(useRespone(true,'Delete success!',userdelete))
        } catch (error) {
            res.status(500).json(useRespone(false,error,null))
        }
    },
    getall: async(req,res)=>{
        try {
            const users = await Sale.find()
            res.status(200).json(users)
        } catch (error) {
            res.status(500).json(error)
        }
    },
}
export default SaleController