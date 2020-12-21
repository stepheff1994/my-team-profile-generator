
const Employee = require("../lib/Employee.class.js");

test("creates an employee object", () => {
  const employee = new Employee("joe", 89, "joe@gmail.com");

  expect(employee.name).toEqual(expect.any(String));
  expect(employee.id).toBe(89);
  expect(employee.email).toBe("joe@gmail.com");
});

test("should create a name through the contructor argument", () => {
  const employee = new Employee("joe", 89, "joe@gmail.com");
  expect(employee.name).toBe("joe");
});

test("should get a name through getName()", () => {
  const employee = new Employee("joe", 89, "joe@gmail.com");
  expect(employee.getName()).toBe("joe");
});


