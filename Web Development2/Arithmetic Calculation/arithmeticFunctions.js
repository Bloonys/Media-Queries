// arithmeticFunctions.js

function add(value_1, value_2) {
  return value_1 + value_2;
}

function sub(value_1, value_2) {
  return value_1 - value_2;
}

function multiply(value_1, value_2) {
  return value_1 * value_2;
}

function divide(value_1, value_2) {
  if (value_2 === 0) {
    return "Error: Cannot divide by zero";
  }
  return value_1 / value_2;
}

module.exports = {
  add,
  sub,
  multiply,
  divide,
};
