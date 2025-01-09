import express from 'express';

//backend app
const app = express();
app.get("/",(req, res) => {
    return res.send('Hello World!');
});

app.post("/posts",(req, res) => {
    return res.send('Post your article here! hehe');
})

app.post("/student/add",(req, res) => {
    return res.status(200).send({message: 'user added'});
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

//network port
const PORT = 8000;   

app.listen(PORT, () =>{
    console.log(`App on listening on port ${PORT}`)
});

