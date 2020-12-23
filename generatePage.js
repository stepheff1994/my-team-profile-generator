const Employee = require("./lib/Employee.class");

const generatePage = (data) => {
  return `
    <!DOCTYPE html> 
    <html lang="en"> 
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" integrity="sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA==" crossorigin="anonymous" />
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossorigin="anonymous"></script>
      <link href='generatePage.css' rel='stylesheet' />
      <title>Portfolio Demo</title>
    </head>
  
    <body>
    <h1>My Team</h1>
    <div class="employee-cards">
        <div class='container'>
            <div class='row'>
                ${createCards(data)}
    </div>

    </body>
    </html>
    `;
};

function createCards(arr) {
  console.log(arr)
  let content = "";

  arr.forEach((employee) => {
    let ptag; 
    let role; 
    let icon;
    if (employee.engineerName) {
      ptag = `<p><a href="https://github.com/${employee.github}">Github</a></p>`
      role = "Engineer"
      icon = `<i class="fas fa-glasses"></i>`
    }
    else if (employee.internName) {
      ptag = `<p>school: ${employee.internSchool}</p> `
      role = "Intern"
      icon = `<i class="fas fa-graduation-cap"></i>`
    }
    else {
      ptag = `<p>office number: ${employee.officeNumber}</p> `
      role = "Manager"
      icon = `<i class="fas fa-coffee"></i>`
    }
    content += `
        <div class="card col-4">
        <div class="card-header">
        <h4><b>${employee.engineerName || employee.internName || employee.managerName}</b></h4> 
        <span>${icon}<p> ${role}</p><span>
        </div>
            <div class="container">
            <p> ID: ${employee.employeeId}</p>
            <p> email: ${employee.emailAddress}</p>
                ${ptag} 
            </div>
        </div>
        `;
  });

  content += `
        </div>
    </div>
  `
  return content;
}

module.exports = generatePage;
