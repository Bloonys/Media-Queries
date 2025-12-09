const weightInput = document.getElementById("weight");
const heightInput = document.getElementById("height");
const resultText = document.getElementById("resultText");
const calculateBtn = document.getElementById("calculateBtn");
const resetBtn = document.getElementById("resetBtn");

calculateBtn.addEventListener("click", function() {
  const weight = parseFloat(weightInput.value);
  const height = parseFloat(heightInput.value);

  if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
    resultText.textContent = "Please enter valid weight and height.";
    return;
  }

  const bmi = (weight / (height * height)).toFixed(2);
  let category = "";

  if (bmi < 18.5) {
    category = "Underweight";
  } else if (bmi < 25) {
    category = "Normal weight";
  } else if (bmi < 30) {
    category = "Overweight";
  } else {
    category = "Obese";
  }

  resultText.textContent = `Your BMI is ${bmi} (${category})`;
});

resetBtn.addEventListener("click", function() {
  weightInput.value = "";
  heightInput.value = "";
  resultText.textContent = "Results";
  weightInput.focus();
});

