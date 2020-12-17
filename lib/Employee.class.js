class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }

  getName() {
    return this.name;
  }
  //   honk() {
  //     console.log("beep beep");
  //   }
}

// Employee objects are still created and used the same way
const employee = new Employee("Honda", "Civic");
const employeeName = employee.getName();

module.exports = Employee;
