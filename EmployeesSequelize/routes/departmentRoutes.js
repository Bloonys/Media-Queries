const router = require("express").Router();
const Department = require("../models/Department");

// GET all departments
router.get("/", (req, res) => {
  Department.findAll()
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

// GET one department
router.get("/:id", (req, res) => {
  var id = parseInt(req.params.id);
  Department.findByPk(id)
    .then((department) => {
      if (!department) {
        return res.status(404).send({
          message: "Department not found.",
        });
      }

      res.status(200).send(department);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Database connection failed.",
        error: err.stack,
      });
    });
});

// POST create department
router.post("/", (req, res) => {
  var newDepartment = {
    name: req.body.name,
    description: req.body.description,
  };

  Department.create(newDepartment)
    .then((department) => {
      res.status(201).send(department);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Database connection failed.",
        error: err.stack,
      });
    });
});

// PATCH update department
router.patch("/:id", (req, res) => {
  var id = parseInt(req.params.id);
  Department.findByPk(id)
    .then((department) => {
      if (!department) {
        return res.status(404).send({
          message: "Department not found.",
        });
      }

      department.name = req.body.name;
      department.description = req.body.description;

      department
        .save()
        .then((department) => {
          res.status(200).send(department);
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

// DELETE department
router.delete("/:id", (req, res) => {
  var id = parseInt(req.params.id);
  Department.findByPk(id)
    .then((department) => {
      if (!department) {
        return res.status(404).send({
          message: "Department not found.",
        });
      }

      department
        .destroy()
        .then((department) => {
          res.status(200).send(department);
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
