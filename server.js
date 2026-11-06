import express from "express";
import connectDB from "./config/db.js";
import productRoute from "./routes/product.route.js";
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json());
connectDB();
app.use('/api/Product',productRoute);

const port = process.env.PORT;
app.listen(port,()=>{
    console.log(`server is running on http://localhost:${port} `);
});