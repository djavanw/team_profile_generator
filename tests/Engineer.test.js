const Engineer = require("../lib/Engineer");
const Employee = require("../lib/Employee");

test("Can set github username via constructor argument", () => {
    const testValue = "djavanw";
    const e = new Engineer("Eng", 3, "test@test.com", testValue);
    expect(e.school).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
    const testValue = "Engineer";
    const e = new Engineer("Eng", 3, "test@test.com", "djavanw");
    expect(e.getRole()).toBe(testValue);
});

test("Can get github username via getGitHub()", () => {
    const testValue = "djavanw";
    const e = new Engineer("Eng", 3, "test@test.com", testValue);
    expect(e.getschool()).toBe(testValue);
});