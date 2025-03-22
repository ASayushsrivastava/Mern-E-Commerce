import categoryModel from "../models/categoryModel.js"
import slugify from 'slugify'

export const createCategoryController= async(req,res) =>{
    try{
        const {name} = req.body
        if(!name){
            return res.status(401).send({
                success: false,
                message: 'Name is required'
            })
        }
        const existingCategory = await categoryModel.findOne({name})
        if(existingCategory){
            return res.status(200).send({
                success: false,
                message: 'Category already exists'
            })
        }
        const category = await new categoryModel({name,slug : slugify(name)}).save()
        res.status(201).send({
            success: true,
            message: 'Category created successfully',
            category
        })
    }catch(err){
        console.log(err)
        res.status(500).send({
            success: false,
            message: 'Error in creating category',
            err
        })
    }
} 


// update Category
export const updateCategoryController= async(req,res)=>{
    try{
        const {name} = req.body
        const {id} = req.params
        const category = await categoryModel.findByIdAndUpdate(id,{name,slug:slugify(name)},{new:true})
        res.status(200).send({
            success:true,
            message:"Category updated successfully",
            category
        })
    }catch(err){
        console.log(err)
        res.status(500).send({
            success: false,
            message: 'Error in updating category',
            err
        })
    }
}

// get all category
export const categoryController =async(req,res)=>{
    try{
        const category = await categoryModel.find({})
        res.status(200).send({
            success:true,
            message:"All Categories List",
            category
        })
    }catch(err){
        console.log(err)
        res.status(500).send({
            success: false,
            message: 'Error in getting all category',
            err
        })
    }
}

// singleCategoryController
export const singleCategoryController =async(req,res)=>{
    try{
        const category = await categoryModel.findOne({slug: req.params.slug})
        res.status(200).send({
            success:true,
            message:"Category",
            category
        })
    }
    catch(err){
        console.log(err)
        res.status(500).send({
            success: false,
            message: 'Error in getting category',
            err
        })
    }
}

// delete Category controller
export const deleteCategoryController=async(req,res)=>{
    try{
        const {id}=req.params
        const category=await categoryModel.findByIdAndDelete(id)
        res.status(200).send({
            success:true,
            message:"Category deleted successfully",
            category
        })
    }catch(err){
        console.log(err)
        res.status(500).send({
            success: false,
            message: 'Error in deleting category',
            err
        })
    }
}