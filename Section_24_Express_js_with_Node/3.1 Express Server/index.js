// *Import
import express from "express"

// *Constant
const app = express();
const port = 3000;

app.listen(port, ()=>{
    console.log("Server running on port 3000");
});