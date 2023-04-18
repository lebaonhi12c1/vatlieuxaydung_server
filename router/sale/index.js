import { Router } from "express";
import saleController from "../../controllers/sale/index.js";

const router = Router()
router.get('/',saleController.getall)
router.post('/create',saleController.create)
router.put('/update',saleController.update)
router.delete('/delete/:id',saleController.delete)

export default router