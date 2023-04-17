import { Router } from "express";
import userController from "../../controllers/user";

const router = Router()

router.post('/login',userController.login)
router.get('/',userController.getAll)
router.post('/create',userController.create)
// router.put('/update',updateUser)
// router.put('/delete',deleteUser)