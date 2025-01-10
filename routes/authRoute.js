import express from 'express'
import {registerController,loginController} from '../controllers/authController.js'
import {requireSignIN, isAdmin} from '../middlewares/authMiddleware.js'

//router object 

const router = express.Router()

//register router
//post register request
router.post('/register', registerController)

//post login request
router.post('/login', loginController)




//test request
// to test import testController from authcontroller
// router.get('/test',requireSignIN ,isAdmin ,testController)

export default router