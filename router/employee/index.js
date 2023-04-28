import { Router } from "express";
import employeeController from "../../controllers/employee/index.js";
const router = Router()

router.get('/',employeeController.getall)
router.post('/create',employeeController.create)
router.post('/login',employeeController.login)
router.put('/update',employeeController.update)
router.delete('/delete/:id',employeeController.delete)

export default router