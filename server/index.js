const express = require('express')
const app = express()
const cors = require("cors")
const pool = require("./db")

//middleware
app.use(cors());
app.use(express.json()) //req.body

//ROUTES//
//Create a todo
app.post("/todos", async(req, res) => {
    try {
        const { description } = req.body;
        const newTodo = await pool.query("INSERT INTO todo (description) VALUE($1)", 
            [description]);
            res.json(newTodo);
    } 
    
    catch (err) {
        console.error(err.message)
    } 
})
app.listen(5000, () => {
    console.log("Server is running on port 5000")
})