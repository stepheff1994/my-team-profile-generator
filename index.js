const inquirer = require("inquirer");
const fs = require("fs");
const generatePage = require("./generatePage.js")
let employeeArray = []

// fs.writeFile('./index.html', generatePage(name, github), err => {
//     if (err) throw new Error(err);

//     console.log('Portfolio complete! Check out index.html to see the output!');
//   });

// array of questions for user
const managerQuestions = [
  {
    type: "input",
    name: "managerName",
    message: "What is the manager's name?",
  },
  {
    type: "input",
    name: "employeeId",
    message: "What is the manager's employee ID?",
  },
  {
    type: "input",
    name: "emailAdress",
    message: "What is the manager's email adress?",
  },
  {
    type: "input",
    name: "officeNumber",
    message: "What is the manager's office number?",
  },
];

const addMember = [
  {
    type: "list",
    name: "menu",
    message: "Who would you like to add?",
    choices: ["Engineer", "Intern", "Finish building my team"],
  },
];

const engineerQuestions = [
  {
    type: "input",
    name: "engineerName",
    message: "What is the engineer's name?",
  },
  {
    type: "input",
    name: "employeeId",
    message: "What is the engineer's employee ID?",
  },
  {
    type: "input",
    name: "github",
    message: "What is the engineer's github username?",
  },
  {
    type: "input",
    name: "emailAdress",
    message: "What is the engineer's email adress?",
  },
];

const internQuestions = [
  {
    type: "input",
    name: "internName",
    message: "What is the intern's name?",
  },
  {
    type: "input",
    name: "employeeId",
    message: "What is the intern's employee ID?",
  },
  {
    type: "input",
    name: "internSchool",
    message: "What is the name of the intern's school?",
  },
  {
    type: "input",
    name: "emailAdress",
    message: "What is the intern's email adress?",
  },
];

function init() {
  inquirer.prompt(managerQuestions).then((managerAnswers) => {
    console.log(managerAnswers);
    add()
  })
  setTimeout(() => {
    
      writeToFile("index.html", generatePage(employeeArray) )
    
  },30000)
}

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, err => {
        if (err) throw new Error(err);
    
        console.log('check the html');
      });
      
    
}

 function add() {
  inquirer.prompt(addMember).then((addAnswer) => {
    if (addAnswer.menu === "Engineer") {
      addEngineer();
    } else if (addAnswer.menu === "Intern") {
      addIntern();
    } 
    
  }).then(() => {
    console.log(employeeArray)
  })
   
}

function addEngineer() {
  inquirer.prompt(engineerQuestions).then((engineerAnswers) => {
    employeeArray.push(engineerAnswers);
    add();
  });
}

function addIntern() {
  inquirer.prompt(internQuestions).then((internAnswers) => {
    employeeArray.push(internAnswers);
    add();
  });
}

init();
