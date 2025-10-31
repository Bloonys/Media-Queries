const express = require("express");
const app = express();

const arithmetic = require("./arithmeticFunctions");


app.use(express.json());


app.post("/calculate", (req, res) => {
  const { operation, value_1, value_2 } = req.body;


  if (!operation || value_1 === undefined || value_2 === undefined) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  const num1 = Number(value_1);
  const num2 = Number(value_2);

  let result;

  try {
    switch (operation) {
      case "add":
        result = arithmetic.add(num1, num2);
        break;
      case "sub":
        result = arithmetic.sub(num1, num2);
        break;
      case "mul":
        result = arithmetic.multiply(num1, num2);
        break;
      case "div":
        result = arithmetic.divide(num1, num2);
        break;
      default:
        return res.status(400).json({
          error: "Invalid operation. Use add, sub, mul, or div",
        });
    }

 
    res.json({
      operation,
      value_1: num1,
      value_2: num2,
      result,
    });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
