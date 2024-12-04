app.use("/employees", require("./api/employees"));
const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

// Logging middleware
app.use((req, res, next) => {
  console.log(`${req.method} ${req.originalUrl}`);
  next();
});

const employees = require("./data/employees");

app.get("/", (req, res) => {
  res.send("Welcome to the Prismatic Employees API.");
});

router.get("/", async (req, res, next) => {
  try {
    const books = await prisma.book.findMany();
    res.json(books);
  } catch (e) {
    next(e);
  }
});

// 404
app.use((req, res, next) => {
  next({ status: 404, message: "Endpoint not found." });
});

// Error-handling
app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status ?? 500);
  res.json(err.message ?? "Sorry, something went wrong :(");
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});

app.get("/employees/:id", (req, res, next) => {
  const { id } = req.params;
  const employee = employees.find((n) => n.id === +id);
  if (employee) {
    res.json(note);
  } else {
    res.status(404).send(`Note with id ${id} does not exist.`);
  }
});
