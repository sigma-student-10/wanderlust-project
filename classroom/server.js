const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Hi I am root!");
});

//Index - user
app.get("/users", (req,res) => {
    res.send("GET for show users");
});

//Show - users
app.get("/users/:id", (req,res) => {
    res.send("GET for show users");
});

//POST - user
app.post("/users", (req,res) => {
    res.send("POST for show users");
});

//DELETE - users
app.post("/users", (req,res) => {
    res.send("POST for show users");
});


//POST
//Index 
app.get("/posts", (req,res) => {
    res.send("GET for show posts");
});

//Show 
app.get("/posts/:id", (req,res) => {
    res.send("GET for show posts");
});

//POST  
app.post("/posts", (req,res) => {
    res.send("POST for  posts");
});

//DELETE  
app.delete("/posts/:id", (req,res) => {
    res.send("DELETE for  posts id");
});


app.listen(3000, () => {
    console.log("server is listening to 3000");
});