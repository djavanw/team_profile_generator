const Engineer = require("../lib/engineer");
const Employee = require("../lib/employee");

test("Can set github username via constructor argument", () => {
    const testValue = "djavanw";
    const e = new Engineer("Eng", 3, "test@test.com", testValue);
    expect(e.ghName).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
    const testValue = "Engineer";
    const e = new Engineer("Eng", 3, "test@test.com", "djavanw");
    expect(e.getRole()).toBe(testValue);
});

test("Can get github username via getGitHub()", () => {
    const testValue = "djavanw";
    const e = new Engineer("Eng", 3, "test@test.com", testValue);
    expect(e.getghAddress()).toBe(testValue);
});