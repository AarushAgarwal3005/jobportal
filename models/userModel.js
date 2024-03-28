import mongoose from 'mongoose'
import validator from 'validator'
const userSchema = new mongoose.Schema({
    name: { type: String, required: [true, 'Name is Required'] },
    lastName: { type: String, },
    email: { type: String, required: [true, 'email is Required'], unique: true, validate: validator.isEmail },
    password: { type: String, required: [true, 'password  is Required'] ,minlength:[6,"password length should be greater than 6 character"]},
    location: { type: String, default: 'India' }

}, { timeStamps: true })
export default mongoose.model('User', userSchema)