let display = document.getElementById("display");
let currentOperation = null;
let previousValue = null;

function appendNumber(number) {
    display.value += number;
}

function setOperation(operation) {
    if (display.value === "") return;
    currentOperation = operation;
    previousValue = display.value;
    display.value = "";
}

function calculate() {
    if (currentOperation === null || display.value === "") return;
    let result;
    const currentValue = parseFloat(display.value);

    if (currentOperation === "+") {
        result = parseFloat(previousValue) + currentValue;
    } else if (currentOperation === "-") {
        result = parseFloat(previousValue) - currentValue;
    } else if (currentOperation === "*") {
        result = parseFloat(previousValue) * currentValue;
    } else if (currentOperation === "/") {
        result = parseFloat(previousValue) / currentValue;
    }

    display.value = result;
    currentOperation = null;
    previousValue = null;
}

function clearDisplay() {
    display.value = "";
    currentOperation = null;
    previousValue = null;
}