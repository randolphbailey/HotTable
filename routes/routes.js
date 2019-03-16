const express = require('express');
const path = require('path');
const app = express();

app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname, "../", "index.html"));
})

app.get('/table', (req,res)=>{
    res.sendFile(path.join(__dirname, "../", "add.html"));
})

app.get('/view', (req,res)=>{
    res.sendFile(path.join(__dirname, "../", "view.html"));
})

app.get("/api/tables", function(req, res) {
  //return stuff in tables.js
});

app.get("/api/waitlist", function(req, res) {
    //return stuff in waitlist.js
});

module.exports = app;