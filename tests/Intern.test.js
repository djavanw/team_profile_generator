const Intern = require("../lib/Intern");
const Employee = require("../lib/Employee");

test("Can set school via constructor argument", () => {
  const testValue = "Austin";
  const e = new Intern("Int", 2, "test@test.com", testValue);
  expect(e.school).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
  const testValue = "Intern";
  const e = new Intern("Int", 2, "test@test.com", "Austin");
  expect(e.getRole()).toBe(testValue);
});

test("Can get school via getSchool()", () => {
  const testValue = "Austin";
  const e = new Intern("Int", 2, "test@test.com", testValue);
  expect(e.getschool()).toBe(testValue);
});