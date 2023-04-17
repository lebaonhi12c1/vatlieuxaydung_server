import { Router } from "express";
import userController from "../../controllers/user/index.js";

const router = Router()

router.post('/login',userController.login)
router.get('/',userController.getAll)
router.post('/create',userController.create)
router.put('/update',userController.update)
router.delete('/delete/:id',userController.delete)

export default router