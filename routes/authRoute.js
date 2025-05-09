// for backend
// routing for the endpoint of register and login.

import express from 'express'
import {registerController,loginController, testController, forgotPasswordController} from '../controllers/authController.js'
import {requireSignIN, isAdmin} from '../middlewares/authMiddleware.js'

//router object 

const router = express.Router()

//register router
//post register request
router.post('/register', registerController)

//post login request
router.post('/login', loginController)

// forgot password
router.post('/forgot-password', forgotPasswordController)

// protected route - auth
// .get because we will requesst to check the authentication of user
router.get('/user-auth', requireSignIN, (req, res) => {
    res.status(200).send({
        ok:true
    })
})


// for admin protected route
router.get('/admin-auth', requireSignIN,isAdmin, (req, res) => {
    res.status(200).send({
        ok:true
    })
})

//test request
// to test import testController from authcontroller
router.get('/test',requireSignIN ,isAdmin ,testController)

export default router