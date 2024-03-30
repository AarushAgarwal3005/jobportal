import  express from "express";
import userAuth from "../middlewares/authMiddlewear.js";
import { updateUserController } from "../controller/userController.js";
const router=express.Router();
//routes //GET USER||GET

//UPDATE USER|| PUT
router.put("/update-User",userAuth,updateUserController)
export default router