const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("companyDB", "root", "YOUR_PASSWORD", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize;
