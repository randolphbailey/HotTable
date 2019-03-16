const express = require('express');
const path = require('path');
const app = express();
const fs = require('fs');
var bodyParser = require('body-parser');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var reservations;

app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname, "../", "home.html"));
})

app.get('/tables', (req,res)=>{
    res.sendFile(path.join(__dirname, "../", "tables.html"));
})

app.get('/reserve', (req,res)=>{
    res.sendFile(path.join(__dirname, "../", "reserve.html"));
})

app.get("/api/tables", function(req, res) {
    let something;
  fs.readFile(path.join(__dirname, "../", "tables.js"), "utf-8", function(err, data) {
        something = JSON.parse(data);
        console.log(something);
        res.json(something);
  });
});

app.post("/api/tables", function(req, res) {
    fs.readFile(path.join(__dirname, "../", "tables.js"), "utf-8", function(err, data) {
        reservations = JSON.parse(data);
        console.log("The length is " + reservations.length);
        writeFile(reservations, res);
    });
    function writeFile(reservations, res){
        // if(reservations.length < 5){
        //     fs.
        // }
        console.log(reservations);
    }
//   fs.writeFile(path.join(__dirname, "../", "tables.js"), "utf-8", function(err, data) {
//         something = JSON.parse(data);
//         console.log(something);
//         res.json(something);
//   });
});

app.post("/api/waitlist", function(req, res) {
    //return stuff in waitlist.js
});

module.exports = app;