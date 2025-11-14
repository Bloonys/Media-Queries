const Sequelize = require("sequelize");       // Import Sequelize class
const sequelize = require("../config");        // Import the Sequelize object

// Create the model using define()
const Employee = sequelize.define("Employee", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

// Export the model
module.exports = Employee; 

