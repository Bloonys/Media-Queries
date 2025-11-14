const express = require("express");
const app = express();

const sequelize = require("./config");

// 1️⃣ Import the two models
const Department = require("./models/Department");
const Employee = require("./models/Employee");

// 2️⃣ Apply association
Department.hasMany(Employee, { onDelete: "CASCADE" });
Employee.belongsTo(Department);

// 3️⃣ Authenticate connection
sequelize
  .authenticate()
  .then(() => {
    console.log("Connection established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

// 4️⃣ Map models into the database using sync()
sequelize
  .sync()
  .then(() => {
    console.log("Tables were created successfully!");
  })
  .catch((err) => {
    console.error("Error creating tables:", err);
  });

// 5️⃣ Listen to the server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
