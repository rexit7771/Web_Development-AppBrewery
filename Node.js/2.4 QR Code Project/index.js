/* 
*
1. Use the inquirer npm package to get user input.
*
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
*
3. Create a txt file to save the user input using the native fs node module.
*/
import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([{
        name : "Chatbot",
        message : "Insert Your Link: ",
        type : "input"
    }])
  .then((answers) => {
    // answers.(value name pada prompt) Untuk memanggil message nya Chatbot
    console.log(answers);
    var qr_png = qr.image(answers.Chatbot, {type: "png"});
    qr_png.pipe(fs.createWriteStream("qr_image.png"));

    fs.writeFile('myUrl.txt', answers.Chatbot, err => {
  if (err) {
    console.error(err);
  } else {
    // file written successfully
  }
});

  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });