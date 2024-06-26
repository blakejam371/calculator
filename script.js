let displayValue = 0;
let firstNumber = null;
let secondNumber =  null;
let operator = null;
let buttons = document.querySelectorAll('button');
let result = null;
updateDisplay();
clickButton();

window.addEventListener('keydown', (event) => {
  const key = event.key;

  if (key === 'Enter') {
    event.preventDefault();
  }
  
  if (key === 'Backspace' || key === 'Delete') {
    if (firstNumber !== null && operator !== null && secondNumber !== null) {
      secondNumber = null;
      displayValue = firstNumber;
    } else if (firstNumber !== null && operator !== null && secondNumber === null) {
      operator = null;
    } else if (firstNumber !== null && operator === null && secondNumber === null) {
      firstNumber = null;
      displayValue = 0;
    }
    updateDisplay();
    return;
  }

  if (key >= 0 && key <= 9) {
    inputNumber(key);
    updateDisplay();
  } else if (['+', '-', '*', '/'].includes(key)) {
    inputOperator(key);
  } else if (key === '.') {
    inputDecimal();
    updateDisplay();
  } else if (key === '%') {
    inputPercent(displayValue);
    updateDisplay();
  } else if (key === '=' || key === 'Enter') {
    operate(firstNumber, operator, secondNumber);
    updateDisplay();
  } else if (key === 'Escape') {
    clear();
    updateDisplay();
  }
});

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
  } else if (operator !== null && firstNumber !== null & secondNumber !== null) {
    operate(firstNumber, operator, secondNumber);
    updateDisplay();
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
    if (b === 0 || b === '0') {
      alert('Stop Dividing by Zero!');
      clear();    
    } else {
      result = +a / +b;
    }
  }

  displayValue = roundNumber(result);
  firstNumber = result;
  operator = null;
  secondNumber = null;
  if (result === null) {
    clear();
  }
};

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
  result = number/100;
  displayValue = result;
  firstNumber = result;
}

function clear() {
  displayValue = 0;
  firstNumber = null;
  secondNumber =  null;
  operator = null;
  result = null;
}

function roundNumber(number) {
  if (Number.isInteger(number)) {
    return number;
  } else {
    return parseFloat(number.toFixed(3));
  }
}

