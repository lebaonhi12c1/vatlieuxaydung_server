import { Router } from "express";
import producerController from "../../controllers/producer/index.js";
const router = Router()

router.get('/',producerController.getall)
router.post('/create',producerController.create)
router.put('/update',producerController.update)
router.delete('/delete/:id',producerController.delete)

export default router