const addRouter = require('express').Router();
const fs = require("fs");
let db = require("../db/db.json");
addRouter.get("/", (req, res) => {
    const { title, text } = req.body;
    const read = {
        title: title,
        text: text
    }
    fs.readFile("./db/db.json", "utf8", (data) => {
        console.log(data);
    })
    db.push(read);
})

addRouter.post("/", (req, res) => {
    const { title, text } = req.body;
    const add = {
        title: title,
        text: text
    }
    fs.writeFile("./db/db.json", (data) => {
        console.log(data);
    })
    db.push(add);
})

module.exports = addRouter
