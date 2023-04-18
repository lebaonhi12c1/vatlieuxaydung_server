import { Router } from "express";
import orderController from "../../controllers/order/index.js";
const router = Router()

router.get('/',orderController.getall)
router.post('/create',orderController.create)
router.put('/update',orderController.update)
router.delete('/delete/:id',orderController.delete)

export default router