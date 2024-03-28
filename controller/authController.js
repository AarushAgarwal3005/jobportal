
import userModel from "../models/userModel.js";

export const registerController = async (req, res) => {
    try {
        //get data from the body of the request
        const { name, email, password } = req.body
        //validate
        if (!name || !email || !password) return res.status(400).send({ success: false, message: "Please fill all fields" })
        const existingUser = await userModel.findOne({ email })
        if (existingUser) {
            return res.status(200).send({ success: false, message: "Email is already registered please login" });
        }
        //when all the validations are done
        const user = await userModel.create({ name, email, password })
        res.status(201).send({
            success: true,
            message: "user created successfully",
            user
        });
    }
    catch (error) {
        console.log(error);
        res.status(400).send({
            message: 'Error in register controller',
            success: false,
            error
        });

    }
};