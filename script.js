let display = "";

function appendValue(value) {
  if (
    (isOperator(value) && isOperator(display.slice(-1))) ||
    (value === "." && display.includes("."))
  ) {
    return;
  }

  display += value;
  updateDisplay();
}

function isOperator(value) {
  return ["+", "-", "*", "/"].includes(value);
}

function updateDisplay() {
  document.getElementById("result1").innerText = display;
}

function deleteLast() {
  display = display.slice(0, -1);
  updateDisplay();
}

function resetCalc() {
  display = "";
  updateDisplay();
}

function calculateResult() {
  try {
    if (!display) return;

    let result1 = eval(display);

    if (typeof result1 === "number") {
      result1 = parseFloat(result1.toFixed(3));
    }

    display = result1.toString();
    updateDisplay();
  } catch (error) {
    alert("Invalid input!");
    resetCalc();
  }
}