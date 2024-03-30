 export const updateUserController=async(req,res,next)=>{
    const {name,email,lastname,password}=req.body
    if(!name || !email||!lastname||!password) {
        next("plaese provide all fields")
    }
 }