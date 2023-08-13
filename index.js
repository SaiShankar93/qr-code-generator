import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([
    {
      message: "Type in your Text : ",
      name: "Text",
    },
  ])
  .then((answers) => {
    const text = answers.Text;
    var qr_svg = qr.image(text);
    qr_svg.pipe(fs.createWriteStream("qr_img.png"));

    fs.writeFile("URL.txt", url, (err) => {
      if (err) throw err;
      console.log("The file is  saved!");
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in  current environment
    } else {
      // Something went wrong
    }
  });
