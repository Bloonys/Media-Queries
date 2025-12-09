const router = require("express").Router();
const Employee = require("../models/Employee");
const Department = require("../models/Department");

// GET all employees
router.get("/", (req, res) => {
  Employee.findAll()
    .then((results) => {
      res.status(200).send(results);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Database connection failed.",
        error: err.stack,
      });
    });
});

// GET one employee by ID (with department info)
router.get("/:id", (req, res) => {
  var id = parseInt(req.params.id);
  Employee.findByPk(id, {
    include: Department, 
  })
    .then((employee) => {
      if (!employee) {
        return res.status(404).send({
          message: "Employee not found.",
        });
      }

      res.status(200).send(employee);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Database connection failed.",
        error: err.stack,
      });
    });
});

// POST create new employee
router.post("/", (req, res) => {
  var newEmployee = {
    name: req.body.name,
    department: req.body.department,
    salary: req.body.salary,
  };

  Employee.create(newEmployee)
    .then((employee) => {
      res.status(201).send(employee);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Database connection failed.",
        error: err.stack,
      });
    });
});

// PATCH update employee
router.patch("/:id", (req, res) => {
  var id = parseInt(req.params.id);
  Employee.findByPk(id)
    .then((employee) => {
      if (!employee) {
        return res.status(404).send({
          message: "Employee not found.",
        });
      }

      employee.name = req.body.name;
      employee.department = req.body.department;
      employee.salary = req.body.salary;

      employee
        .save()
        .then((employee) => {
          res.status(200).send(employee);
        })
        .catch((err) => {
          res.status(500).send({
            message: err.message,
            error: err.stack,
          });
        });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Database connection failed.",
        error: err.stack,
      });
    });
});

// DELETE employee
router.delete("/:id", (req, res) => {
  var id = parseInt(req.params.id);
  Employee.findByPk(id)
    .then((employee) => {
      if (!employee) {
        return res.status(404).send({
          message: "Employee not found.",
        });
      }

      employee
        .destroy()
        .then((employee) => {
          res.status(200).send(employee);
        })
        .catch((err) => {
          res.status(500).send({
            message: err.message,
            error: err.stack,
          });
        });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Database connection failed.",
        error: err.stack,
      });
    });
});

module.exports = router;

