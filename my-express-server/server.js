//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use = (bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.send("Hello");
});

app.get("/bmicalculator", function (req, res) {
    res.sendFile(__dirname +  "/bmiCalculator.html");    
});

app.post("/bmicalculator", function(req, res) {
    
    var height = Number(req.body.height);
    
    
    var weight = Number(req.body.weight);
    
    var bmi = weight / height;

    res.send("Your BMI is " + bmi);
});

app.get("/contact", function(req, res) {
    res.send("Contact me at : pramaskoro@gmail.com");
});

app.get("/about", function(req, res) {
    res.send("My Name is Bagus and I'm an amateur Web Developer");
})

app.listen(3000, function () {
    console.log("Server 3000 Started");
});