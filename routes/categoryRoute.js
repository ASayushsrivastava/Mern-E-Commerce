// backend route for category of products
import express from 'express'
import { isAdmin, requireSignIN } from '../middlewares/authMiddleware.js'
import {createCategoryController, updateCategoryController,categoryController,singleCategoryController,deleteCategoryController} from '../controllers/categoryController.js'
const router = express.Router()

// Routes
// create category
router.post('/create-Category', requireSignIN, isAdmin, createCategoryController)
// update category
router.put('/update-category/:id', requireSignIN, isAdmin, updateCategoryController)
// getall category
router.get('/get-allCategory',categoryController)
// single category
router.get('/get-category/:slug',singleCategoryController)
// delete category
router.delete('/delete-category/:id',requireSignIN,isAdmin,deleteCategoryController)

export default router