import express from 'express';
import dotenv from 'dotenv'
import morgan from 'morgan'
import connectDB from './config/db.js';
import authroutes from './routes/authRoute.js';
import cors from 'cors'
import categoryRoute from './routes/categoryRoute.js'
import productRoute from './routes/productRoute.js'
//dotenv configiration
dotenv.config()

//database configuration
connectDB()

// PORT
const PORT = process.env.PORT

//rest object
const app = express()

//middleware
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

//Routes
app.use('/api/v1/auth',authroutes);
//route for category
app.use('/api/v1/category',categoryRoute)
//route for product
app.use('/api/v1/product',productRoute)

//rest api
app.get('/',(req,res)=>{
    res.send(
    "<h1>Welcome to my site ❤️</h1>"
    )
})

//run project using listen
app.listen(PORT, ()=>{
    console.log(`Server listening on ${PORT}`)
})