import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:[true, "Please Provide username"],
        unique:true
    },
    email:{
        type: String,
        required:[true, "Please Provide email"],
        unique: true
    },
    password:{
        type: String,
        required:[true, "Please Provide password"],
    },
    isVerfied:{
        type: Boolean,
        default: false
    },
    isAdmin:{
        type: Boolean,
        default: false
    },
    forgotPasswordToken: String,
    forgotPasswordTokenExpiry: Date,
    verifyToken: String,
    verifyTokenExpiry: Date,
})

const User = mongoose.model.user || mongoose.model("users", userSchema);
export default User;