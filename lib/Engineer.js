const Employee = require("./employee");

class Engineer extends Employee {
  constructor(name, id, email, ghName) {
    super(name, id, email);
    this.ghName = ghName;  
  }
  //Make a template for the complete address.  Just pulling GitHub Name
  getghAddress() {
    return this.ghName;
  }
  getRole() {
    return "Engineer";
  }
}

module.exports = Engineer;
