const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");

const Employee = require("../lib/employee");
const Manager = require("../lib/manager");
const Engineer = require("../lib/engineer");
const Intern = require("../lib/intern");

// const OUTPUT_DIR = path.resolve(__dirname, "output");
// const outputPath = path.join(OUTPUT_DIR, "team.html");

//const render = require("./src/page-template.js");

// const teamMembers = [];
// const idArray = [];

// function appMenu () {

//}
function htmlGenerated () {
  return `<h1> Hello World </h1> 
<p> People of the World</p>`;
}

const questions = [
  {
    type: "input",
    name: "startEntry",
    message: "Do you need to add Team Members?",
  },
  
]

function writeHtml(fileName, data) {
  console.log("HTML generated");
  fs.writeFileSync(fileName, htmlGenerated (data))
}

function init() {
  inquirer.prompt(questions)
  .then((userResponses) => writeHtml("team.html", userResponses));
}

init();
