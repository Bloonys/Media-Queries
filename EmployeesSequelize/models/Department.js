const Sequelize = require("sequelize");       // Import Sequelize class
const sequelize = require("../config");        // Import the Sequelize object

// Create the model using define()
const Department = sequelize.define("Department", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

// Export the model
module.exports = Department;
