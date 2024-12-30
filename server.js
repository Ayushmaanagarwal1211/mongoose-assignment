const express = require('express');
const fs = require('fs');
const PORT = 5050;
const app = express();
app.use(express.json());

require("./mongoose_conn.js")
app.get("/", async (req, res) => {
    // const result =await  collection.find().toArray()
    // res.json(result)
});

app.use(logger)
const booksRouter = require("./routes/books");
function readFile(){
    let students = fs.readFileSync('./students.json');
    students = JSON.parse(students);
    return students
}
function logger(req,res,next){
    req.students = readFile()
    next()
}
app.use("/books",booksRouter)

app.listen(PORT);
