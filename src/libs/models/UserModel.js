import mongoose from "mongoose";
import { Schema, models } from "mongoose";

const UserSchema = new Schema({
    fullname: {
        type: String,
        required: true,
    },
    email: {    
        type: String,
        required: true,
        unique: true,   
    },
    password: {
        type: String,
        required: true,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    isVerfied: {
        type: Boolean,
        default: false,
    },
    // isInstructor{
    //     []
    // },
}, { timestamps: true });   

const UserModel = models.UserModel || mongoose.model("UserModel", UserSchema);

export default UserModel;