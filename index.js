require("dotenv").config();

const PORT = process.env.PORT;
const MONGO_DB = process.env.MONGO_DB;
const express = require("express");
const mongoose = require("mongoose");
const expressSession = require("express-session");
const bodyParser = require("body-parser");
const user = require('./models/User')
const app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", "views");
app.use(bodyParser.json({ limit: "10mb" })); // Parse JSON data up to 10mb
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded data with extended options (allows nested objects)

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(MONGO_DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      //useCreateIndex: true // If using Mongoose < 6.0, remove this line
    });
    console.log(`MongoDB connected`);
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1); // Exit the application on error
  }
};

connectDB();

app.get("/", (req, res) => {
  console.log("called")
  res.render("index");
});

app.get("/training/register", (req, res) => {
  res.render("register");
});

app.get("/training", (req, res) => {
  res.render("course-dash");
});

app.post("/register_account", (req, res) => {
  
  user.create({
    email:req.body.email,
    first_name:req.body.firstname,
    last_name:req.body.lastname
  }).then(() => {
    res.send(`Salamat Kapatid ${req.body.firstname}. Ikaw ay naka register na sa aming database. Magintay sa updates. God Bless!`)
  })

  
});

app.listen(PORT, () => {
  console.log(`ChurchApp Listening at port ${PORT}`);
});
