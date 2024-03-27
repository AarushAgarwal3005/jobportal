//const express=require("express"); //this is common js 
import express from "express";//this is module js
import dotenv from  "dotenv";
import colors from "colors";

import connectDB from "./config/db.js";
//config dot env
dotenv.config();
connectDB();
//rest object

const app=express()
//routes
app.get('/',(req,res)=>
{
    res.send("<h1> welcome to this  JOB PORTAL</h1>")})
    //port
    const PORT=process.env.PORT ||8080;
    //listen
    app.listen(PORT,()=>{
        console.log(`node server running in ${process.env.DEV_MODE} Mode on port ${8080}`
        );})  