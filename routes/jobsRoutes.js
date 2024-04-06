import express from "express"
import { createJobController } from "../controller/jobsController.js";
import userAuth from "../middlewares/authMiddlewear.js";
const router=express.Router();
// r o u t e s 
router.post('/create-job',userAuth,createJobController)

export default router