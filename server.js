const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

//ROUTING

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/add", (req, res) => {
  res.sendFile(path.join(__dirname, "add.html"));
});

app.get("/view", (req, res) => {
  res.sendFile(path.join(__dirname, "view.html"));
});

app.get("/api/tables", function(req, res) {
  //return stuff in tables.js
});

app.get("/api/waitlist", function(req, res) {
  //return stuff in waitlist.js
});

//LISTENING

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
