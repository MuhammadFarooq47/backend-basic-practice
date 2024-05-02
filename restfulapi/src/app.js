const express = require("express");
require("./db/connection");
const Student = require("./models/students");

const app = express();

app.use(express.json());
const port = process.env.PORT || 3000;

// app.get("/", (req, res) => {
//     res.send("Hello world from other sides..")
// })

// Create new student with then and catch method...
// app.post("/students", (req, res) => {
//     console.log("Body Req ==>>" ,req.body)
//     const user = new Student(req.body);
//     user.save().then(() => {
//         res.status(201).send(user);
//     }).catch((e) => {
//         res.status(400).send(e)
//     })
//     // res.send("Hello World from other sides..")
// });

// Create user with async await method...
app.post("/students", async (req, res) => {
    try{
        const user = new Student(req.body);
        const createUser = await user.save();
        res.status(201).send(createUser)
    }catch(e){
        res.status(400).send(e.message)
    }
});


//Read the data of Register students:
app.get("/students", async (req, res) => {
    try{
        const studentsData = await Student.find();
        res.send(studentsData);
    }catch(e){
        res.send(e)
    }
});

//Get students data indevidual by using id...
app.get("/students/:id", async (req, res) => {
    try{
         const _id = req.params.id;
         console.log("id =>>",_id)
        const studentData = await Student.findById(_id, req.body, {
            new : true
        });
        console.log(studentData);

        {!studentData ? res.status(404).send("Page not found!") : res.send(studentData)}

    }catch(e){
        res.status(500).send(e)
    }
});

//Update the students data by phone number.. Data ko update krny k lea patch ka function use hota hy...
app.patch("/students/:phone", async (req, res) => {
    try{
        const _id = req.params.phone;
        const updateStudents = await Student.findOneAndUpdate(_id, req.body, {
            new : true
        })
        res.send(updateStudents)
    }catch(e){
        console.log(e.message)
        res.status(404).send(e.message)
    }
});


//Delete Student by id...
app.delete("/students/:id", async (req, res) => {
    try{
        const deleteStudent = await Student.findByIdAndDelete(req.params.id);
        {!req.params.id ? res.status(400).send("Page not found!") : res.send(deleteStudent)}
    }catch(e){
        res.status(500).send(e)
        console.log(e)
    }
})
app.listen(port, () => {
    console.log(`connection is setup at ${port}`)
})