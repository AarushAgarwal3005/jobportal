import express from 'express';
import { testPostController } from '../controller/testcontroller.js';
import userAuth from '../middlewares/authMiddlewear.js';
const router = express.Router();
router.post('/test-post',userAuth,testPostController)
export default router