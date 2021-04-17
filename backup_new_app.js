const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");

const Employee = require("./lib/employee");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
let card = require("./src/card")
let htmlBody = require("./src/index")

//Empty array to hold all team members
const teamMembers = [];

const idArray = [];

//Validation for user to enter a manager for each team creation.
const needPosition = function (position) {
    if (position) {
        return true; 
    } else {
        return "Each team must have a manager for initial creation."
    }
}

function makeTeam() {
    inquirer.prompt ([
      {
        type: "list",
        name: "startEntry",
        message: "Please add additional members to the team or select none to generate the team profile.",
        choices: ["Engineer", "Intern", "None"]
      },
      
    ]).then(selMember => {
        switch(selMember.startEntry) {
            // case "Manager":
            //     addMan();
            //     break;
            case "Intern":
                addInt();
                break;
            case "Engineer":
                addEng();
                break;
            default:
                generateTeam();
        }
    })
}

  
function generateTeam () {
    //This will make a constructor DB
    console.log(teamMembers)  
    let teamCards = "";
    for(let i = 0; i < teamMembers.length; i++) {
       teamCards += card(teamMembers[i]);
    }
    let genTeam = htmlBody(teamCards);
    fs.writeFileSync("./dist/teamHtmlGenerated.html", genTeam);
}  
  function addMan() {
      inquirer.prompt ([
          {
              type: "input",
              name: "managerName",
              message: "Enter the Manager's name: ",
              validate: needPosition,
          },
          {
             type: "input",
             name: "manID",
             message: "Enter the Manager's ID number: ", 
          },
          {
              type: "input",
              name: "manEmail",
              message: "Enter the Manager's email address: ",
          },
          {
              type: "input",
              name: "manOfficeNum",
              message: "Enter the Manager's office number: ",
          },
      ]).then(answers => {
          const manager = new Manager(answers.managerName, answers.manID, answers.manEmail, answers.manOfficeNum);
          teamMembers.push(manager);
          idArray.push(answers.manID);
          makeTeam();
      });
    }

  function addInt() {
    inquirer.prompt ([
        {
            type: "input",
            name: "intName",
            message: "Enter the Intern's name: ",
        },
        {
           type: "input",
           name: "intID",
           message: "Enter the Intern's ID number: ", 
        },
        {
            type: "input",
            name: "intEmail",
            message: "Enter the Intern's email address: ",
        },
        {
            type: "input",
            name: "intSchool",
            message: "Enter the Intern's school: ",
        },
    ]).then(answers => {
        const intern = new Intern(answers.intName, answers.intID, answers.intEmail, answers.intSchool);
        teamMembers.push(intern);
        idArray.push(answers.intID);
        makeTeam();
    });
}

function addEng() {
    inquirer.prompt ([
        {
            type: "input",
            name: "engName",
            message: "Enter the Engineer's name: ",
        },
        {
           type: "input",
           name: "engID",
           message: "Enter the Engineer's ID number: ", 
        },
        {
            type: "input",
            name: "engEmail",
            message: "Enter the Engineer's email address: ",
        },
        {
            type: "input",
            name: "engGithub",
            message: "Enter the Engineer's github user name: ",
        },
    ]).then(answers => {
        const engineer = new Engineer(answers.engName, answers.engID, answers.engEmail, answers.engGithub);
        teamMembers.push(engineer);
        idArray.push(answers.engID);
        makeTeam();
    });
}


addMan();
//makeTeam();