const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;  
  }
  getofficeNumber() {
    return getofficeNumber
  }
  getRole() {
    return "Manager"
  }
}




module.exports
