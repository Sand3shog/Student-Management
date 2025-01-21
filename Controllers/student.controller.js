import express from 'express';
import Student from "../student.model.js";
import bcrypt from 'bcrypt';
import mongoose from 'mongoose';
const router =  express.Router();

// register req and password hashing
router.post("/student/register", async (req, res) => {
    const newStudent = req.body;

    //find student with provided email
    const student = await Student.findOne({ email: newStudent.email });

    //if student throws error
    if(student) {
        return res.status(400).send({message: 'Email already exists'});
    };

    //hash password =? requirement is plain password and salt rounds

    const plainPassword = newStudent.password;
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(plainPassword, saltRounds);

    newStudent.password = hashedPassword;

    await Student.create(newStudent);
    return res.status(201).send("Registered user...")
})

// login request
router.post("/student/login", async (req, res) => {
    const loginCredentials = req.body;


    //find student with provided email
    const student = await Student.findOne({ email : loginCredentials.email });

    //if not student throw error
    if(!student) {
        return res.status(400).send({message: 'Invalid email or password'});
    };

    //password check
    // need to compare plain password with hashed password
    // plain password is provide by student

    const plainPassword = loginCredentials.password;
    const hashedPassword = student.password;

    const isPasswordMatched = await bcrypt.compare(plainPassword, hashedPassword);

    if(!isPasswordMatched) {
        return res.status(400).send({message: 'Invalid Credentials'});
    };

    //remove password
    student.password = undefined;

    return res.status(200).send({message: 'Login successfull...'});
});

// list request
router.get('/student/list', async (req, res) => {
    const students = await Student.find();
    return res.status(200).send({message: 'success', student_List: students});
});

//router.post("/student/add", (req, res) =>{
    
//     const newStudent = req.body;
//     // const newStudent = {
//     //     id: 3,
//     //     name: 'nikhil uprety',
//     // };
//     studentList.push(newStudent);
//     return res.status(201).send({message: "added student successfully.."});
// })

//get student by id
//router.get("/student/details/:id", (req, res) =>{
    
//     const studentId = req.params.id;
//     // const actorId = req.body.id;
//     const studentDetail = studentList.find((item) => {
//         return item.id === Number(studentId);   //in case your number is stored in string eg '56'
//     });
//     if(!studentDetail){
//         return res.status(404).send({ message: "Student doesnot exist"})
//     };

//     return res.status(200).send(
//         {
//         message: "success", 
//         studentData: studentDetail
//     });
// })


//delete student by id
router.delete('/student/delete/:id', async (req, res) => {
    //extract student id from req params
    const StudentId = req.params.id;

    //should be a valid mongo id
    const isValidId = mongoose.isValidObjectId(StudentId);

    // if not Valid id
    if(!isValidId){
        return res.status(400).send({message: 'Invalid Object ID...'});
    }
    
    // find student
    const student = await Student.findOne({_id : StudentId});

    // if not student throw error
    if(!student) {
        return res.status(404).send({message: 'student does not exist'});
    }

    //delete student
    await Student.deleteOne({_id : StudentId
    });

    // send res
    return res.status(200).send({message: 'Student is deleted successfully'});
});

export {router as studentController};