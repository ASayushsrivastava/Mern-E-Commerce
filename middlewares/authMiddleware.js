import JWT from 'jsonwebtoken'
import userModel from '../models/userModel.js'

//protected route form json web token

export const requireSignIN= async(req, res, next) =>{

    try{
        const decode = JWT.verify (req.headers.authorization, process.env.JWT_KEY)
        req.user = decode
        next()
    }catch(e){
        console.log(e)
        res.send({
            success: false,
            message: 'Invalid authorization'
        })
    }
}

//admin access
export const isAdmin = async(req, res, next) => {
    try{
        const user = await userModel.findById(req.user._id)
        if(user.role !== 1){
            return res.status(401).send({
                success: false,
                message: 'Unauthorized Access'
            })
        }else{
            next()
        }
    }
    catch(e){
        console.log(e)
        return res.status(401).send({
            success: false,
            message: 'Error in Admin Access'
        })
    }
}