const express = require("express");
const cors = require("cors");
const app = express();

const sequelize = require("./config");

const Department = require("./models/Department");
const Employee = require("./models/Employee");

app.use(cors());

Department.hasMany(Employee, { onDelete: "CASCADE" });
Employee.belongsTo(Department);

function customMiddleware(req, res, next) {
  console.log("Middleware function called!!!");
  next();
}

app.use(customMiddleware);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


sequelize
  .sync()
  .then(() => {
    console.log("Tables were created successfully!");
  })
  .catch((err) => {
    console.error("Error creating tables:", err);
  });

app.listen(3306, () => {
  console.log("Runing！");
});
