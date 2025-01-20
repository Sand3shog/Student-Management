import express from 'express';
import Student from "../student.model.js";
import bcrypt from 'brcypt';
const router =  express.Router();

router.post("/student/register", async (req, res) => {
    const newStudent = req.body;

    const plainPassword = newStudent.password;
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(plainPassword, saltRounds);

    newUser.password = hashedPassword;

    await Student.create(newStudent);
    return res.status(201).send("Registered user...")
})

//router.get("/",(req, res) => {
//     return res.send('Hello World!');
// });

//router.post("/posts",(req, res) => {
//     return res.send('Post your article here! hehe');
// })

//router.put("/student/update",(req, res) => {
//     return res.status(201).send({message: 'student updated!!'});
// })

//router.delete("/student/delete",(req, res) => {
//     return res.status(200).send({message: 'student deleted!!'});
// })

// //create an api to insert course
//router.post("/course/add",(req, res) => {
//     return res.status(201).send({message: 'course added!!'});
// })

//router.delete("/course/delete",(req, res) => {
//     return res.status(200).send({message: 'course delete!!'});
// })


//router.put("/course/update",(req, res) => {
//     return res.status(200).send({message: 'course updated!!'});
// })

//router.get("/product/list", (req, res) =>{
//     return res.status(200).send({message: 'your product here'})

// });

//router.post("/student/add", (req, res) =>{
    
//     const newStudent = req.body;
//     // const newStudent = {
//     //     id: 3,
//     //     name: 'nikhil uprety',
//     // };
//     studentList.push(newStudent);
//     return res.status(201).send({message: "added student successfully.."});
// })

// //get actor by id
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


// //route
// app.post('/student/add', async (req, res) => {
//     //extract new student from req body
//     const studentList = req.body
//     await Student.create(studentList)
//     return res.status(201).send({message:"success"})
// });

// //get
// app.get('/student/list', async (req, res) => {
//     const students = await Student.find();
//     return res.status(200).send({message: 'success', student_List: students});
// });

// //delete student by id
// app.delete('/student/delete/:id', async (req, res) => {
//     //extract product id from req params
//     const StudentId = req.params.id;

//     // should be a valid mongo id
//     const isValidId = mongoose.isValidObjectId(StudentId);

//     // if not Valid id
//     if(!isValidId){
//         return res.status(400).send({message: 'Invalid Object ID...'});
//     }
    
//     // find student
//     const student = await Student.findOne({_id : StudentId});

//     // if not student throw error
//     if(!student) {
//         return res.status(404).send({message: 'student does not exist'});
//     }

//     //delete student
//     await Student.deleteOne({_id : StudentId
//     });

//     // send res
//     return res.status(200).send({message: 'Student is deleted successfully'});
// });
export {router as studentController};