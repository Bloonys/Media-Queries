const express = require("express");
const cors = require("cors");
const app = express();

//inport modles and confi
const sequelize = require("./config");
const Department = require("./models/Department");
const Employee = require("./models/Employee");

//route------------
const departmentRoutes = require("./routes/departmentRoutes");
const employeeRoutes = require("./routes/employeeRoutes");

app.use(cors());

//cascade：when delete(ex.department) will delete all(employer info)
Department.hasMany(Employee, { onDelete: "CASCADE" });
Employee.belongsTo(Department);

// Middleware
function customMiddleware(req, res, next) {
  console.log("Middleware function called!!!");
  next();
}
app.use(customMiddleware);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes-------------
app.use("/departments", departmentRoutes);
app.use("/employees", employeeRoutes);

//sync method
sequelize
  .sync()
  .then(() => {
    console.log("Tables were created successfully!");
  })
  .catch((err) => {
    console.error("Error creating tables:", err);
  });

app.listen(3000, () => {
  console.log("Runing on port 3000");
});
