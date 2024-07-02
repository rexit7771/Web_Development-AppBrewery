//* Import
import express from "express";

//* Constant
const app = express();
const port = 3000;

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
});

app.get("/", (req, res)=>{
    // console.log(req);
    res.send("<center><h1>Hello World, I'm from Express JS, add an /contact to contact me</h1></center>");
});

app.get("/contact", (req, res)=> {
    res.send("<center><h3>Here's my email: pramaskoro@gmail.com. add /about to see about me</h3></center>");
});

app.get("/about", (req, res)=>{
    res.send("<center><p>Hey there, you made it!. Keep up the good work</p></center>");
});