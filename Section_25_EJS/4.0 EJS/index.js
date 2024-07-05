import express from "express";

const app = express();
const port = 3000;

// *Variabel untuk menentukan hari
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var date = new Date();
var day = date.getDay();
// *

app.get("/", (req, res)=>{
    // console.log(day);
    res.render("index.ejs",
        {day : day}
    );
});

app.listen(port, ()=>{
    console.log(`Listening to port ${port}`);
});