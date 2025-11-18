const express = require("express");
const router = express.Router();

router.get("/employees", (req, res) => {
  res.send("GET all employees");
});

router.post("/employees", (req, res) => {
  res.send("POST a new employee");
});

router.put("/employees/:id", (req, res) => {
  res.send("PUT update employee");
});

router.delete("/employees/:id", (req, res) => {
  res.send("DELETE employee");
});

module.exports = router;
