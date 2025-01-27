// the skeletal model for the database of the mongoDB.

import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    name:{
        type : String,
        required : true,
        trim : true
    },
    email:{
        type : String,
        required : true,
        unique : true,
        lowercase : true,
        match : /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    },
    password:{
        type : String,
        required : true,
    },
    phone:{
        type : String,
        required : true,
        unique : true,
        // validate : {
        //     validator : function(v) {
        //         return /^\+\d{1,3}[-.\s]?\d{1,14}$/.test(v);
        //     },
        //     message : '{VALUE} is not a valid phone number'
        // }
    },
    address:{
        type : String,
        required : true,
    },
    role:{
        type : Number,
        default : 0,
    }
},
{timestamps: true})

export default mongoose.model('users',userSchema)