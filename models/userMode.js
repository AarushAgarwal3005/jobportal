import mongoose from'mongoose'
import validator from 'validator'
const userSchema=new mongoose.Schema({
    name:{type:String,required:[true,'Name is Required']},
    email:{type:String,required:[true,'email is Required'],unique:true,validate:validator.isEmail},
password:{type:String,required:[true,'password  is Required']},
location:{type:String ,default:'India'}

},{timeStamps:true})
export default mongoose.model('User',userSchema)