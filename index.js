import express from 'express';
import mongoose from 'mongoose';
import Student from "./student.model.js";
import { studentController } from './student.controller.js';
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

//network port
const PORT = 8000;   

app.listen(PORT, () =>{
    console.log(`App on listening on port ${PORT}`)
});

