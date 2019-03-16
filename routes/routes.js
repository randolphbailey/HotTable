const express = require('express');
const path = require('path');
const app = express();
let reservations = require('../tables')
let waitlist = require('../waitlist')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


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
  res.json(reservations)
});

app.post("/api/tables", function(req, res) {
    let request = req.body;
    if(reservations.length<5){
        reservations.push(request)
    } else {
        waitlist.push(request)
    }
});

app.get("/api/waitlist", function(req, res) {
    res.json(waitlist);
});

module.exports = app;