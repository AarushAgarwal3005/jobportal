//const express=require("express"); //this is common js 
// packages import 
import express from "express";//this is module js
import "express-async-errors"
import dotenv from "dotenv";
import colors from "colors";
import morgan from "morgan";
import cors from'cors';


//files import

import testRoutes from './routes/testRoutes.js'
import connectDB from "./config/db.js";
import authRoutes from './routes/authRoutes.js'
import errorMiddlewear from "./middlewares/errorMiddlewear.js";
//config dot env
dotenv.config();
connectDB();
//rest object

const app = express()

//dealing with json jata add middlewears
app.use(express.json());
app.use(cors())
app.use(morgan('dev'));
//routes
app.use('/api/v1/test', testRoutes)
app.use('/api/v1/auth', authRoutes)
app.use(errorMiddlewear)
// app.get('/',(req,res)=>
// {
//     res.send("<h1> welcome to this  JOB PORTAL</h1>")})
//port
const PORT = process.env.PORT || 8080;
//listen
app.listen(PORT, () => {
    console.log(`node server running in ${process.env.DEV_MODE} Mode on port ${8080}`
    );
})  