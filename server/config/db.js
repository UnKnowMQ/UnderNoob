import mongoose from "mongoose";
export const connectDB = async() => {
    await mongoose.connect('mongodb+srv://tuanduog:fCyV4C0ULCLxnFMr@cluster0.oj4pz.mongodb.net/tuanduog').then(()=>console.log("DB connected"));
} // connect with mongoose

// password of server
// fCyV4C0ULCLxnFMr