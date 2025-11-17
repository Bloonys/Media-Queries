// Import express
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors()); 

const PORT = 3000;

app.use(customMiddleware);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Employers data (in-memory array)
var employers = [
  { id: 1, name: "John1", department: "HR", salary: 5000 },
  { id: 2, name: "John2", department: "IT", salary: 7000 },
  { id: 3, name: "John3", department: "Finance", salary: 6500 }
];

// ✅ GET - Get all employers
app.get("/employers", (req, res) => {
  res.status(200).send(users);
});

// ✅ POST - Add new employer
app.post("/employers", (req, res) => {
  const { id, name, department, salary } = req.body;

  if (!id || !name || !department || !salary) {
    return res.status(400).json({ error: "Missing required fields." });
  }

  Employers.push({ id, name, department, salary });
  res.json({ message: "Employer added successfully!", Employers });
});

// ✅ PUT - Update employer data
app.put("/employers/:id", (req, res) => {
  const employerId = parseInt(req.params.id);
  const { name, department, salary } = req.body;

  const index = Employers.findIndex(e => e.id === employerId);

  if (index === -1) {
    return res.status(404).json({ error: "Employer not found." });
  }

  Employers[index] = { id: employerId, name, department, salary };
  res.json({ message: "Employer updated successfully!", Employers });
});

// ✅ DELETE - Delete employer
app.delete("/employers/:id", (req, res) => {
  const employerId = parseInt(req.params.id);

  const index = Employers.findIndex(e => e.id === employerId);

  if (index === -1) {
    return res.status(404).json({ error: "Employer not found." });
  }

  Employers.splice(index, 1);
  res.json({ message: "Employer deleted successfully!", Employers });
});

app.get("/", (req, res) => {
  res.send("Server is working!");
});


// ✅ Start Server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
