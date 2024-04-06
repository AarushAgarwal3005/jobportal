import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
    company: {
        type: String,
        required: [true, "Please add a company name"],
        maxlength: [30, "Company name should be less than or equal to 30 characters"],
    },
    position: {
        type: String,
        required: [true, "Job Position is required field"],
        minLength: 100, 
        maxLength: 5000,
    },
    currentstatus: {
        type: String,
        enum: ['pending', 'reject', 'interview'],
        default: 'pending',
    },
    workTime:{type:String,
        enum:['full-time','paart-time','internship','contract'],
        default: 'full-time'},
    location:{
              city : {type:String},
              country: {type:String},
           },
           
    createdBY:{type:mongoose.Types.ObjectId,
    ref:'User',
   } ,
    
},{timestamps:true});


export default mongoose.model('job', jobSchema);

