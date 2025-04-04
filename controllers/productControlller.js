import productModel from "../models/productModel.js";
import slugify from 'slugify'
import fs from 'fs'

export const createProductController=async(req,res)=>{
    try{
        const {name,description,price,category,quantity,shipping}=req.fields;
        const {photo} = req.files
        //validation - switch statement
        switch(true){
            case !name:
                return res.status(500).send({error:'Name is required'})
            case !description:
                return res.status(500).send({error:'Description is required'})
            case !price:
                return res.status(500).send({error:'Price is required'})
            case !category:
                return res.status(500).send({error:'Category is required'})
            case !quantity:
                return res.status(500).send({error:'Quantity is required'})
            case photo && photo.size>1000000:
                return res.status(500).send({error:'Photo should be less than 1mb'})
        }
        const products = new productModel({...req.fields,slug:slugify(name)})
        if(photo){
            products.photo.data=fs.readFileSync(photo.path),
            products.photo.contentType=photo.type
        }
        await products.save()
        res.status(201).send({
            success: true,
            message: 'Product created successfully',
            products
        })
    }catch(err){
        console.log(err)
        res.status(500).send({
            success: false,
            message: 'Error in creating product',
            err
        })
    }
}

// update Product 
export const updateProductController = async(req,res)=>{
    try{
        const {name,slug,description,price,category,quantity,shipping}=req.fields
        const {photo} = req.files
        //validation - switch statement
        switch(true){
            case !name:
                return res.status(500).send({error:'Name is required'})
            case !description:
                return res.status(500).send({error:'Description is required'})
            case !price:
                return res.status(500).send({error:'Price is required'})
            case !category:
                return res.status(500).send({error:'Category is required'})
            case !quantity:
                return res.status(500).send({error:'Quantity is required'})
            case photo && photo.size>1000000:
                return res.status(500).send({error:'Photo should be less than 1mb'})
        }
        const products =await productModel.findByIdAndUpdate(req.params.id,{...req.fields,slug:slugify(name)},{new:true})
        if(photo){
            products.photo.data=fs.readFileSync(photo.path),
            products.photo.contentType=photo.type
        }
        await products.save()
        res.status(201).send({
            success: true,
            message: 'Product updated successfully',
            products
        })
    }catch(err){
        console.log(err)
        res.status(500).send({
            success: false,
            message: 'Error in updating product',
            err
        })
    }
}

// getAll products
export const getAllProductController = async(req,res) => {
    try{
        const product = await productModel.find({}).populate('category').select("-photo").limit(12).sort({createdAt:-1})
        res.status(200).send({
            success: true,
            message: 'All Products List',
            totalCount :product.length,
            product
        })
    }catch(err){
        console.log(err)
        res.status(500).sene({
            success: false,
            message: 'Error in getting all products',
            err
        })
    }
}

//get single product
export const singleProductController=async(req,res)=>{
    try{
        const product = await productModel.findOne({slug:req.params.slug}).select("-photo").populate("category")
        res.status(200).send({
            success:true,
            message:"Single Product successfull",
            product
        })
    }catch(err){
        console.log(err)
        res.status(500).send({
            success: false,
            message: 'Error in getting single product',
            err
        })
    }
}

//get photo
export const productPhotoController =async(req,res)=>{
    try{
        const product = await productModel.findById(req.params.id).select("photo")
        console.log(product)
        if(product.photo.data){
            res.set('Content-type',product.photo.contentType)
            return res.status(200).send(
                product.photo.data
            )
        }
    }catch(err){
        console.log(err)
        res.status(500).send({
            success:false,
            message:"Error in getting product photo",
            err
        })
    }
}

// delete product 
export const deleteProductController=async(req,res)=>{
    try{
        await productModel.findByIdAndDelete(req.params.id).select("-photo")
        res.status(200).send({
            success: true,
            message: 'Product deleted successfully',
        })
    }catch(e){
        console.log(e)
        res.status(500).send({
            success: false,
            message: 'Error in deleting product',
            err
        })
    }
}