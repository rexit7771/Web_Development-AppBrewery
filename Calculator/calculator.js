
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res) {
    
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var result = num1 + num2;

    res.send("The result is " + result);
});

app.get("/bmicalculator", function (req, res) {
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator", function (req, res) {
    var h = parseFloat(req.body.height);
    var w = parseFloat(req.body.weight);

    h = h / 10;

    var bmi = w + Math.pow(h, 2);
    
    res.send("Your BMI is " + bmi);
});

app.listen(3000, function(){
    console.log("Server Starting in 3000");
});