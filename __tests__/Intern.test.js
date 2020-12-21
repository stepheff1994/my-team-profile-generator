const Intern = require("../lib/Intern.class.js");


  

  test("should create a school name through the contructor argument", () => {
    const employee = new Intern("school","joe", 89, "joe@gmail.com");
    expect(employee.name).toBe("joe");
  });
  
  test("should get a name through getSchool()", () => {
    const employee = new Intern("school","joe", 89, "joe@gmail.com");
    expect(employee.getSchool()).toBe("school");
  });

  test("should get a role through getRole()", () => {
    const employee = new Intern("school","joe", 89, "joe@gmail.com");
    expect(employee.getRole()).toBe("Intern");
  });
  