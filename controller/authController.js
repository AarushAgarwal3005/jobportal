
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
    res.status(201).send({
        success: true,
        message: "user created successfully",
        user
    });


};