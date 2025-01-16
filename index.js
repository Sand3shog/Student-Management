import express from 'express';

//backend app
const app = express();


app.get("/",(req, res) => {
    return res.send('Hello World!');
});

app.post("/posts",(req, res) => {
    return res.send('Post your article here! hehe');
})

app.put("/student/update",(req, res) => {
    return res.status(201).send({message: 'student updated!!'});
})

app.delete("/student/delete",(req, res) => {
    return res.status(200).send({message: 'student deleted!!'});
})

//create an api to insert course
app.post("/course/add",(req, res) => {
    return res.status(201).send({message: 'course added!!'});
})

app.delete("/course/delete",(req, res) => {
    return res.status(200).send({message: 'course delete!!'});
})


app.put("/course/update",(req, res) => {
    return res.status(200).send({message: 'course updated!!'});
})

app.get("/product/list", (req, res) =>{
    return res.status(200).send({message: 'your product here'})

});

app.post("/student/add", (req, res) =>{
    
    const newStudent = req.body;
    // const newStudent = {
    //     id: 3,
    //     name: 'nikhil uprety',
    // };
    studentList.push(newStudent);
    return res.status(201).send({message: "added student successfully.."});
})

//get actor by id
app.get("/student/details/:id", (req, res) =>{
    
    const studentId = req.params.id;
    // const actorId = req.body.id;
    const studentDetail = studentList.find((item) => {
        return item.id === Number(studentId);   //in case your number is stored in string eg '56'
    });
    if(!studentDetail){
        return res.status(404).send({ message: "Student doesnot exist"})
    };

    return res.status(200).send(
        {
        message: "success", 
        studentData: studentDetail
    });
})

//network port
const PORT = 8000;   

app.listen(PORT, () =>{
    console.log(`App on listening on port ${PORT}`)
});

