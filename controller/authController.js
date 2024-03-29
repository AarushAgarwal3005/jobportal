
import userModel from "../models/userModel.js";

export const registerController = async (req, res, next) => {

    //get data from the body of the request
    const { name, email, password } = req.body
    //validate
    // if (!name) { next("name is required") }
    // if (!email) { "email is  required" }
    // if (!password) { next("password is required and  greater than 6 character") }
    // const existingUser = await userModel.findOne({ email })
    // if (existingUser) {
    //     next("Email is already registered please login")
    // }
    //when all the validations are done
    const user = await userModel.create({ name, email, password })

    // t o k e n 
    const token=user.createJWT()
    res.status(201).send({
        success: true,
        message: "user created successfully",
        user:{
            name: user.name,
            lastName: user.lastName,
            email:user.email,
            location:user.location,
        },token
    });


};
export const loginController=async(req,res)=>{const{email,password}=req.body//validation
if(!email||!password){
    next('provide all fields')
}
// find user by email
const user=await userModel.findOne( { email } ) .select( '+password' ) // the plus '+' here means hide the password for more secure
if(!user){
    next('Invalid  username or password')
}
// c o m p a r e p a s s w o r d 
const isMatch=await user.comparePassword(password)
if(!isMatch){
    next('invalid username or password')
}
user.password=undefined
const token =user.createJWT()
res.status(200).json({
    success:true,
    message: 'logged in',
    user,
    token
})
}