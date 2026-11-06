import mongoose from "mongoose";
const connectDB = async () => 
    await mongoose.connect(process.env.MONGGO_URL);
    console.log('Database connected');

export default connectDB