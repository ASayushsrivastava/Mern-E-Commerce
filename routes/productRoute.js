import express from 'express'
import { isAdmin, requireSignIN } from '../middlewares/authMiddleware.js'
import { createProductController, getAllProductController, productPhotoController, singleProductController, updateProductController } from '../controllers/productControlller.js'
import formidable from 'express-formidable'

const router = express.Router()

// product routes
// create product
router.post('/create-product',requireSignIN,isAdmin,formidable(),createProductController)
// update product
router.put('/update-product/:id', requireSignIN,isAdmin,formidable(),updateProductController)
//getAll products route
router.get('/all-products', getAllProductController)
//get single product route
router.get('/single-product/:slug',singleProductController)
//get product photo controller
router.get('/product-photo/:id',productPhotoController)

export default router