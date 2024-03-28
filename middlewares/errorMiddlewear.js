//error middlewear || NEXT middlewear
const errorMiddlewear=(err,req,res,next)=>{
    console.log(err);
    const defaultError={statusCode:500,message:err}
    
    if (err._message === 'User validation failed') {
        defaultError.statusCode = 400;
        defaultError.message = Object.values(err.errors).map((item) => item.message).join(",");
    }
    // d u p l i c a t e   e r r o r 
    if(err.code && err.code===11000){
        defaultError.statusCode=400;
        defaultError.message=`${Object.keys(err.keyValue)
    } field has to be unique`
}
    res.status(defaultError.statusCode).json({message:defaultError.message})
}
export default errorMiddlewear;
