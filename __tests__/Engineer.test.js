const Engineer = require("../lib/Engineer.class");


  

  test("should create a github username through the contructor argument", () => {
    const employee = new Engineer("github","joe", 89, "joe@gmail.com");
    expect(employee.github).toBe("github");
  });
  
  test("should get a name through getName()", () => {
    const employee = new Engineer("github","joe", 89, "joe@gmail.com");
    expect(employee.getGithub()).toBe("github");
  });

  test("should get a role through getRole()", () => {
    const employee = new Engineer("github","joe", 89, "joe@gmail.com");
    expect(employee.getRole()).toBe("Engineer");
  });
  

  