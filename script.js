let displayValue = 0;
let firstNumber = null;
let secondNumber =  null;
let operator = null;
let buttons = document.querySelectorAll('button');
let result = null;
updateDisplay();
clickButton();

function updateDisplay() {
  const display = document.querySelector('#display');
  display.innerText = displayValue;
};

function clickButton() {
  for(let button of buttons) {
      button.addEventListener('click', () => {
          if(button.classList.contains('number')) {
              inputNumber(button.value);
              updateDisplay();
          } else if(button.classList.contains('operator')) {
              inputOperator(button.value);
          } else if(button.classList.contains('equals')) {
              operate(firstNumber, operator, secondNumber);
              updateDisplay();
          } else if(button.classList.contains('decimal')) {
              inputDecimal();
              updateDisplay();
          } else if(button.classList.contains('percent')) {
              inputPercent(displayValue);
              updateDisplay();
          } else if(button.classList.contains('positiveNegative')) {
              positiveNegative(displayValue);
              updateDisplay();
          } else if(button.classList.contains('clear')) {
              clear();
              updateDisplay();
          }
      }
  )}
}

function inputNumber(number) {
  if(operator === null) {
    if(displayValue === 0) {
      displayValue = number;
    } else {
      displayValue += number;
    }
    firstNumber = displayValue;
  } else {
    if(displayValue === firstNumber) {
      displayValue = number;
    } else {
      displayValue += number;
    }
    secondNumber = displayValue;
  }
}

function inputOperator(str) {
  if(operator === null && firstNumber !== null && secondNumber === null) {
    operator = str;
  }
}

function operate(a, op, b) {
  if (op == '+') {
    result = +a + +b;
  } else if (op == '-') {
    result = +a - +b;
  } else if (op == '*') {
    result = +a * +b;
  } else if (op == '/') {
    result = +a / +b;
  }
  displayValue = result;
  firstNumber = result;
  operator = null;
  secondNumber = null;
  if (result === null) {
    clear();
  };
}

function inputDecimal() {
  if(!displayValue.includes('.')) {
    displayValue += '.';
  }
}

function positiveNegative(number) {
  displayValue = -number;
  if(firstNumber !== null && operator === null && secondNumber === null) {
    firstNumber = -firstNumber;
  } else if (firstNumber !== null & operator !== null & secondNumber !== null) {
    secondNumber = -secondNumber;
  }
}

function inputPercent(number) {
  displayValue = number/100;
}

function clear() {
  displayValue = 0;
  firstNumber = null;
  secondNumber =  null;
  operator = null;
  result = null;
}