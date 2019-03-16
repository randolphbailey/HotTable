const express = require('express');
const path = require('path');
const app = express();
const fs = require('fs');

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
    var something;
  fs.readFile(path.join(__dirname, "../", "tables.js"), "utf-8", function(err, data) {
        something = JSON.parse(data);
        console.log(something);
        res.json(something);
  });
});

app.post("/api/waitlist", function(req, res) {
    //return stuff in waitlist.js
});

module.exports = app;