import Product from '../../models/Product/index.js'
import {useRespone} from '../../hooks/index.js'
import Producer from '../../models/producer/index.js'
import Category from '../../models/category/index.js'
const productController = {
    create: async(req,res)=>{
        try {
            const product_producer = await Producer.findOne({_id: req.body.producerid})
            const product_category = await Category.findOne({_id: req.body.categoryid})
            if(product_producer && product_category){
                const user = await new Product({
                    ...req.body,
                    producerid: product_producer,
                    categoryid: product_category
                })
                await user.save()
                res.status(200).json(useRespone(true,'Create success!',user))
            }
            res.status(400).json(useRespone(false,'Not found Producer or Category!',))
        } catch (error) {
            res.status(500).json(error)
        }
    },
    update: async(req,res)=>{
        try {
            const product_producer = await Producer.findOne({_id: req.body.producerid})
            const product_category = await Category.findOne({_id: req.body.categoryid})
            if(product_producer && product_category){
                const user = await Product.findOneAndUpdate({_id: req.body._id},{
                    ...req.body,
                    producerid: product_producer,
                    categoryid: product_category
                },{new: true})
                res.status(200).json(useRespone(true,'Update success!',user))
            }
            res.status(400).json(useRespone(false,'Not found Producer or Category!',))
          } catch (error) {
            res.status(500).json(useRespone(false,error,null))
          }  
    },
    delete: async(req,res)=>{
        try {
            const userdelete = await Product.findOneAndDelete({_id: req.params.id})
            res.status(200).json(useRespone(true,'Delete success!',userdelete))
        } catch (error) {
            res.status(500).json(useRespone(false,error,null))
        }
    },
    getall: async(req,res)=>{
        try {
            const users = await Product.find()
            res.status(200).json(users)
        } catch (error) {
            res.status(500).json(error)
        }
    },
}
export default productController