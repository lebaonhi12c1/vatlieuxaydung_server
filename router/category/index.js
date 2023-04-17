import { Router } from "express";
import categoryController from "../../controllers/category/index.js";
const router = Router()

router.get('/',categoryController.getall)
router.post('/create',categoryController.create)
router.put('/update',categoryController.update)
router.delete('/delete/:id',categoryController.delete)


export default router