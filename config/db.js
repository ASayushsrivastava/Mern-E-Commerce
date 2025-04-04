// Connecting the database to the server, using mongoose with MongoDB.

import mongoose from "mongoose";

const connectDB = async() => {
    try{
        const conn = await mongoose.connect(process.env.MONGO_URL)
        console.log(`MongoDB Connected...${conn.connection.host}`); 
    }catch(e){
        console.error(`error ${e}`);
    }
}

export default connectDB;