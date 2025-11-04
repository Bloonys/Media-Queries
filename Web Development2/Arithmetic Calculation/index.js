
// index.js
const express = require("express");
const { add, sub, multiply, divide } = require("./arithmeticFunctions");

const app = express();
app.use(express.json());

app.post("/calculate", (req, res) => {
  const { operation, value_1, value_2 } = req.body;

  const num1 = Number(value_1);
  const num2 = Number(value_2);

  let result;

  switch (operation) {
    case "add":
      result = add(num1, num2);
      break;
    case "sub":
      result = sub(num1, num2);
      break;
    case "mul": // 
      result = multiply(num1, num2);
      break;
    case "div": //
      result = divide(num1, num2);
      break;
    default:
      return res.status(400).json({ error: "Invalid operation" });
  }

  res.json({ result });
});

const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Server is running! lol");
});

app.listen(PORT, () => console.log(`✅ Server is running on http://localhost:${PORT}`));

