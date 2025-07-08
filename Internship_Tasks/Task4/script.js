
const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');
const clearButton = document.getElementById('clear');
const equalsButton = document.getElementById('equals');

let currentOperand = '';
let previousOperand = '';
let operator = null;

function updateDisplay() {
    if (operator && previousOperand) {
        display.value = `${previousOperand} ${operator} ${currentOperand}`;
    } else {
        display.value = currentOperand;
    }
}

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;
        if (!isNaN(value) || value === '.') {
            currentOperand += value;
            updateDisplay();
        } else if (['+', '-', '*', '/'].includes(value)) {
            if (currentOperand === '') return;
            if (previousOperand && operator && currentOperand) {
                // Chain calculation before setting new operator
                calculate();
            }
            operator = value;
            previousOperand = currentOperand;
            currentOperand = '';
            updateDisplay();
        }
    });
});

clearButton.addEventListener('click', () => {
    currentOperand = '';
    previousOperand = '';
    operator = null;
    updateDisplay();
});

equalsButton.addEventListener('click', () => {
    if (currentOperand === '' || operator === null || previousOperand === '') return;
    calculate();
    updateDisplay();
});

function calculate() {
    let result;
    const prev = parseFloat(previousOperand);
    const curr = parseFloat(currentOperand);
    switch (operator) {
        case '+':
            result = prev + curr;
            break;
        case '-':
            result = prev - curr;
            break;
        case '*':
            result = prev * curr;
            break;
        case '/':
            result = prev / curr;
            break;
        default:
            return;
    }
    currentOperand = result.toString();
    previousOperand = '';
    operator = null;
}
