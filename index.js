import express from 'express';
import mongoose from 'mongoose';
import Student from "./Controllers/student.model.js";
import { studentController } from './Controllers/student.controller.js';
// import jwt from 'jsonwebtoken';
import { productController } from './product/product.controller.js';

//backend app
const app = express();

app.use(express.json());

//db connect
const dbConnect = async() => {
    try {
        const url = "mongodb+srv://sandeshmaharzan5:sandesh08@sandesh.5wg9e.mongodb.net/College-Student?retryWrites=true&w=majority&appName=sandesh";
        await mongoose.connect(url);
        console.log("DB connection successful..");
    } catch (error) {
        console.log('Db connection failed...');
        console.log(error.message);
    }
};

dbConnect();

//register routes or controller
app.use(studentController);
app.use(productController);

//network port
const PORT = 8000;   

app.listen(PORT, () =>{
    console.log(`App on listening on port ${PORT}`)
});

