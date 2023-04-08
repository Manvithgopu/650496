const express = require("express")
const mongoose = require("mongoose")
const path = require("path")
const app = express()

const Doctor = require("./doctor_schema")
const User = require("./user_schema")

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }))
app.use(express.static(__dirname + '/public'));

mongoose.connect('mongodb+srv://vikasyamsani021203:Vikas2003!@cluster0.axat5s3.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("CONNECTION IS OK!")
    })
    .catch((er) => 
    {
        console.log(er)
    })

app.get("/", (req, res) => {
    res.render("index")
})

app.get("/home_doctor", (req, res) => {
    res.render("home_doctor")
})

app.get("/home_user", (req, res) => {
    res.render("home_user")
})

app.get("/doctor", (req, res) => {
    res.render("doctor")
})

app.get("/user", (req, res) => {
    res.render("user")
})

//app.get("/doctor_signedin", (req, res) => {
//    res.render("doctor_signedin")
//})

//app.post("/doctor_signedin", (req, res) => {
//    res.render("doctor_signedin",{})
//})

app.post("/submit-form", (req, res) => {
    const submit = req.body.action;
    if (submit == "Doctor") {
        res.redirect("/doctor")
    }
    else if (submit == "isuser") 
    {
        res.redirect("/home_user")
    }
})

app.post("/user", (req,res) =>{
    const option = req.body.action
    if(option === "profile")
    {
        res.render("user")
    }
    else if(option === "book")
    {
        res.render("specialisations")
    }
})

app.post("/home_user", (req,res) =>{
    res.render("home_user")
})

app.post("/doctor", async(req,res) =>{
    const option = req.body.action
    if(option === "profile")
    {
        res.render("doctor")
    }
    else if(option === "slot")
    {
        res.render("slot")
    }
})

app.post("/home_doc", async(req,res) =>{
    const newDoctor = new Doctor(req.body);
    await newDoctor.save();
    res.render("doctor_signedin", { newDoctor })
})

app.listen(3000, () => {
    console.log("LISTENING AT 3000!")
})
