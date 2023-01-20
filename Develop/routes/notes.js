const addRouter = require('express').Router();
const fs = require("fs");
let db = require("../db/db.json");

function genId (){
    return Math.random().toString(16).slice(2);
}

addRouter.get("/", (req, res) => {
    fs.readFile("./db/db.json", "utf8", (err,data) => {
        if (err){
            res.json({error:err})
        }else{
            res.json(JSON.parse(data))
        }
        console.log(data);
    
    })
})

addRouter.post("/", (req, res) => {
    const { title, text } = req.body;
    const add = {
        title: title,
        text: text,
        id: genId()
    }
    fs.readFile("./db/db.json", "utf8", (err,data) => {
        if (err){
            res.json({error:err})
        }else{
         let tempData = JSON.parse(data)
         tempData.push(add)
         fs.writeFile("./db/db.json", JSON.stringify(tempData), (err, data) => {
            if (err){
                res.json({error:err})
            }else{
                res.json(add)
            }
            console.log(data);
        })
        } 
    })
})

module.exports = addRouter
