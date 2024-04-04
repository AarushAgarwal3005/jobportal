// i m p o r t  v a r i o u s  p a c k a g e s 
import mongoose from 'mongoose'
import bcrypt from "bcryptjs"
import JWT from 'jsonwebtoken'
import validator from 'validator'

// u s e r s c h e m a 
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is Required']
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
        required: [true, 'email is Required'],
        unique: true,
        validate: validator.isEmail
    },
    password: {
        type: String,
        required: [true, 'password  is Required'],
        minlength: [6, "password length should be greater than 6 character"],
        select: true
    },
    location: {
        type: String,
        default: 'India'
    }

}, {
    timeStamps: true
})

// p a s s  w o r d h a s h  i n g   v e r i f i c a t i o n
userSchema.pre('save', async function () {
if(!this.isModified('password')) return
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
})

// p a s s w o r d c o m p a r e 
userSchema.methods.comparePassword = async function (userPassword) {
    const isMatch = await bcrypt.compare(userPassword, this.password)
    return isMatch;
}

// j s o n w e b t o k e n    G e n e r a t i o n
userSchema.methods.createJWT = function () {
    return JWT.sign({
        userId: this._id
    }, process.env.JWT_SECRET, {
        expiresIn: '30d'
    })
};




export default mongoose.model('User', userSchema)