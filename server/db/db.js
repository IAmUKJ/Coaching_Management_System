import mongoose from "mongoose";

const connectToDatabase=async()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URL,{});
        console.log("MongoDB connected")
    } catch(error){
        console.log("Error connecting to MongoDB",error);
        process.exit(1);
    }
}

export default connectToDatabase;