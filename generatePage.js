const Employee = require("./lib/Employee.class");

const generatePage = (data) => {
    return `
    <!DOCTYPE html> 
    <html lang="en"> 
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Portfolio Demo</title>
    </head>
  
    <body>
    <div class="employee-cards">${createCards(data)}</div>
      
    </body>
    </html>
    `;
  };

  function createCards (arr) {
    let content = ""
    arr.forEach(employee => {
        content += `
        <div class="card">
        <h1>${employee.engineerName}</h1>
        <h2><a href="https://github.com/${employee.github}">Github</a></h2>
        </div>
        `
    })
    return content

  }
  
  module.exports = generatePage;