// This file for registration and login purpose using hashpassword and jwt token.

import userModel from '../models/userModel.js'
import {comparePassword, hashPassword} from '../utils/authUtil.js'
import JWT from 'jsonwebtoken'

//Regiester User
export const registerController = async(req,res) => {
    try{
        const {name, email, phone, password, address,answer} = req.body
        //validation
        if(!name){
            return res.send({message: 'Name is required'})
        }
        if(!email){
            return res.send({message: 'Email is required'})
        }
        if(!phone){
            return res.send({message: 'Phone number is required'})
        }
        if(!password){
            return res.send({message: 'Password is required'})
        }
        if(!address){
            return res.send({message: 'Address is required'})
        }
        if(!answer){
            return res.send({message: 'Answer is required'})
        }
        //check user
        const existingUser = await userModel.findOne({email})
        //existing user
        if(existingUser){
            return res.status(200).send({
                message: 'User already exists',
                success: false
            })
        }

        //register user
        const hashedPassword = await hashPassword(password)
        //save
        const user = await new userModel({name,email,phone,address, answer,password:hashedPassword}).save()
        res.status(201).send({
            message: 'User registered successfully',
            success: true,
            user
        })
    
    }
    catch(e){
        console.log(e)
        res.status(500).send({
            success: false,
            message: 'Error in Registration',
            e
        })
    }
}

//Login User

export const loginController = async(req,res) =>{
    try{

        const{email,password} = req.body
        //validation
        if(!email || !password){
            return res.status(404).send({
                success:false,
                message: 'Invalid Email or Password'
            })
        }

        //compare password 
        //to get the register user's password we first find the user in db
        //check user
        const user = await userModel.findOne({email})
        if(!user){
            return res.status(404).send({
                success: false,
                message: 'User not registered'
            })
        }
        //this will give the user in the "user" const, which can be used for comparing password.

        const match = await comparePassword(password, user.password)
        if(!match){
            return res.status(200).send({
                success:false,
                message:"Invalid Password"
            })
        }

        //if the user is registered and password is right then we can generate token
        //Token
        const token = await JWT.sign({_id:user._id}, process.env.JWT_KEY, {expiresIn: "1d"})
        res.status(200).send({
            success: true,
            message: 'Logged in successfully',
            user:{
                name : user.name,
                email: user.email,
                phone: user.phone,
                address:user.address,
                answer:user.answer,
                role:user.role,
            },
            token
        })
    }
    catch(e){
        console.log(e)
        res.status(500).send({
            success: false,
            message: 'Error in Login',
            e
        })
    }
}

//forgot Password
export const forgotPasswordController= async(req,res)=>{
    try{
        //destructure the data
        const {email,answer, newPassword} = req.body
        if(!email){
            res.status(400).send({
                message: 'Please enter email'
            })
        }
        if(!answer){
            res.status(400).send({
                message: 'Please enter answer'
            })
        }
        if(!newPassword){
            res.status(400).send({
                message: 'Please enter new Password'
            })
        }

        //check
        const user = await userModel.findOne({email,answer})

        //validation
        if(!user){
            return res.status(404).send({
                success: false,
                message: 'Invalid Email or Answer'
            })
        }

        //hash new password
        const hashed = await hashPassword(newPassword)
        await userModel.findByIdAndUpdate(user._id,{password:hashed})
        res.status(200).send({
            success: true,
            message: 'Password changed successfully'
        })
    }catch(err){
        console.log(err)
        res.status(500).send({
            success: false,
            message: 'Error in Forgot Password',
            err
        })
    }
}

//test controller
export const testController = (req,res) =>{
    return res.send({
        message: 'Protected Route'
    })
}