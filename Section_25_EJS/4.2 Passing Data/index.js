import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/submit", (req, res) => {
  var total_letters = req.body["fName"].length + req.body["lName"].length;
  // console.log(data.lNameletters);
  res.render("index.ejs", {letters : total_letters});
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
