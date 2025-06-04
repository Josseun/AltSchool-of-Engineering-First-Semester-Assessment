const output = document.getElementById("output");

function printMessage(value) {
  output.value += value;
}

function deleteLast() {
  output.value = output.value.slice(0, -1);
}

function calculateResult() {
  try {
    output.value = eval(output.value);
  } catch (err) {
    output.value = "Error";
  }
}

document.addEventListener("keydown", function (event) {
  const key = event.key;

  if (/[0-9+\-*/.]/.test(key)) {
    printMessage(key);
  }

  if (key === "Enter" || key === "=") {
    calculateResult();
  }

  if (key === "Backspace") {
    deleteLast();
  }
});
