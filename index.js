const inquirer = require("inquirer")
const fs = require('fs')

// fs.writeFile('./index.html', generatePage(name, github), err => {
//     if (err) throw new Error(err);
  
//     console.log('Portfolio complete! Check out index.html to see the output!');
//   });
 
// array of questions for user
const questions = [ 
    {
        type: "input",
        name: "managerName",
        message: "What is the manager's name?"
    
    },
    {
        type: "input",
        name: "employeeId",
        message: "What is the manager's employee ID?"
    
    },
    {
        type: "input",
        name: "emailAdress",
        message: "What is the manager's email adress?"
    
    },
    {
        type: "input",
        name: "officeNumber",
        message: "What is the manager's office number?"
    
    },
    {
        type: "list",
        name: "menu",
        message: "Who would you like to add?",
        choices: ["Engineer", "Intern", "Finish building my team"]
    
    },


]
const engineerQuestions = [

    {
        type: "input",
        name: "engineerName",
        message: "What is the engineer's name?"
    
    },
    {
        type: "input",
        name: "employeeId",
        message: "What is the engineer's employee ID?"
    
    },
    {
        type: "input",
        name: "github",
        message: "What is the engineer's github username?"
    
    },
    {
        type: "input",
        name: "emailAdress",
        message: "What is the engineer's email adress?"
    
    },
    {
        type: "list",
        name: "menu",
        message: "Who would you like to add?",
        choices: ["Engineer", "Intern", "Finish building my team"]
    
    },

]
const internQuestions = [

    {
        type: "input",
        name: "internName",
        message: "What is the intern's name?"
    
    },
    {
        type: "input",
        name: "employeeId",
        message: "What is the intern's employee ID?"
    
    },
    {
        type: "input",
        name: "internSchool",
        message: "What is the name of the intern's school?"
    
    },
    {
        type: "input",
        name: "emailAdress",
        message: "What is the intern's email adress?"
    
    },
    {
        type: "list",
        name: "menu",
        message: "Who would you like to add?",
        choices: ["Engineer", "Intern", "Finish building my team"]
    
    },

]

function init() {
    inquirer.prompt(questions)
    .then(answers => {
        if (answers.menu === "Engineer") {
            inquirer.prompt(engineerQuestions)
        } else if (answers.menu === "Intern") {
            inquirer.prompt(internQuestions)
        }
    })
}



init()

