import { Router } from "express";
import productController from "../../controllers/product/index.js";
const router = Router()

router.get('/',productController.getall)
router.post('/create',productController.create)
router.get('/:id',productController.getproduct)
router.put('/update',productController.update)
router.delete('/delete/:id',productController.delete)
export default router