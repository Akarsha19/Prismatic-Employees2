const prisma = require("../prisma");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const employees = await prisma.employee.findMany();
    console.log(employees);
    res.json(employees);
  } catch (e) {
    next(e);
  }
});

router.get("/:id", async (req, res, next) => {
  const { id } = req.params;
  const employees = await prisma.employee.findMany();
  const employee = employees.find((n) => n.id === +id);
  if (employee) {
    res.json(employee);
  } else {
    res.status(404).send(`Employee with id ${id} does not exist.`);
  }
});

module.exports = router;
