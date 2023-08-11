//hOW TALK TO DATABASE ?
import mongoose from "mongoose";
 const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:[true,"Please Provide User Name"],
        unique:true
    },
    password:{
        type:String,
        required:[true,"Please Provide Password"],
    },
    email:{
        type:String,
        required:[true,"Please Provide Email"],
        unique: [true,"Email already exists"]
    },
    isVerified:{
        type:Boolean,
        default:false
    },
    isAdmin:{
        type:Boolean,
        default:false
    },
    forgotpasswordToken:String,
    forgotpasswordTokenExpiry:Date,
    verifyToken:String,
    verfyTokenExpiry:Date
 })
//HOW TO EXPORT THAT SCHMA
const User = mongoose.models.users || mongoose.model("users",userSchema)
export default User;


