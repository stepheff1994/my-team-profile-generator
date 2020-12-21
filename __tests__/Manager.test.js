const Manager = require("../lib/Manager.class.js");

test("should create a manager through the contructor argument", () => {
    const employee = new Manager("123","joe", 89, "joe@gmail.com");
    expect(employee.name).toBe("joe");
  });
  
  test("should get a name through get office number", () => {
    const employee = new Manager("123","joe", 89, "joe@gmail.com");
    expect(employee.getOfficeNumber()).toBe("123");
  });

  test("should get a role through getRole()", () => {
    const employee = new Manager("123","joe", 89, "joe@gmail.com");
    expect(employee.getRole()).toBe("Manager");
  });