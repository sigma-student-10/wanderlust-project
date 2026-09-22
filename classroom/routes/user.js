const express = require("express");
const router = express.Router();

//Index - user
router.get("/", (req,res) => {
    res.send("GET for show users");
});

//Show - users
router.get("/:id", (req,res) => {
    res.send("GET for show users");
});

//POST - user
router.post("/", (req,res) => {
    res.send("POST for show users");
});

//DELETE - users
router.post("/", (req,res) => {
    res.send("POST for show users");
});

module.exports = router;
