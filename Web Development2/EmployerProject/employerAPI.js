const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

const PORT = 3000;

// Middleware example
function customMiddleware(req, res, next) {
  console.log("Middleware function called!");
  next();
}

app.use(customMiddleware);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ------------------------------
//   Employees data
// ------------------------------
let employees = [
  { id: 1, name: "John1", department: "HR", salary: 5000 },
  { id: 2, name: "John2", department: "IT", salary: 7000 },
  { id: 3, name: "John3", department: "Finance", salary: 6500 }
];

// ------------------------------
//   GET - all employees
// ------------------------------
app.get("/employees", (req, res) => {
  res.status(200).json(employees);
});

// ------------------------------
//   POST - add employee
// ------------------------------
app.post("/employees", (req, res) => {
  const { id, name, department, salary } = req.body;

  if (!id || !name || !department || !salary) {
    return res.status(400).json({ error: "Missing required fields." });
  }

  employees.push({ id, name, department, salary });

  res.json({
    message: "Employee added successfully!",
    employees
  });
});

// ------------------------------
//   PUT - update employee
// ------------------------------
app.put("/employees/:id", (req, res) => {
  const employeeId = parseInt(req.params.id);
  const { name, department, salary } = req.body;

  const index = employees.findIndex(e => e.id === employeeId);

  if (index === -1) {
    return res.status(404).json({ error: "Employee not found." });
  }

  employees[index] = { id: employeeId, name, department, salary };

  res.json({
    message: "Employee updated successfully!",
    employees
  });
});

// ------------------------------
//   DELETE - delete employee
// ------------------------------
app.delete("/employees/:id", (req, res) => {
  const employeeId = parseInt(req.params.id);
  const index = employees.findIndex(e => e.id === employeeId);

  if (index === -1) {
    return res.status(404).json({ error: "Employee not found." });
  }

  employees.splice(index, 1);

  res.json({
    message: "Employee deleted successfully!",
    employees
  });
});

// ------------------------------
//   Root route
// ------------------------------
app.get("/", (req, res) => {
  res.send("Server is working!");
});

// ------------------------------
//   Start server
// ------------------------------
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
