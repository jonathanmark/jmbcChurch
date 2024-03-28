const express = require("express");
const mongoose = require("mongoose");
const expressSession = require("express-session");

const app = express();
app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", "views");

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/training/register", (req, res) => {
  res.render("register");
});

app.get("/training", (req, res) => {
    res.render("course-dash");
  });

app.listen(3099, () => {
  console.log("ChurchApp Listening at port 3099");
});
