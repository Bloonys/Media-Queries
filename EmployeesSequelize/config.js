const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("componyDB", "root", "123456", {
  host: "localhost",
  dialect: "mariadb",
});

module.exports = sequelize;
