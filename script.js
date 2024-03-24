const screen = document.querySelector('#screen');
const clear = document.querySelector('#clear');
clear.addEventListener('click', clearCalculator);
const openBrackets = document.querySelector('#openBrackets');
openBrackets.addEventListener('click', () => {
  screen.innerText += '(';
});
const closeBrackets = document.querySelector('#closeBrackets');
closeBrackets.addEventListener('click', () => {
  screen.innerText += ')';
});
const modulo = document.querySelector('#modulo');
modulo.addEventListener('click', () => {
  screen.innerText += '%';
});
const seven = document.querySelector('#seven');
seven.addEventListener('click', () => {
  screen.innerText += '7';
});
const eight = document.querySelector('#eight');
eight.addEventListener('click', () => {
  screen.innerText += '8';
});
const nine = document.querySelector('#nine');
nine.addEventListener('click', () => {
  screen.innerText += '9';
});
const divide = document.querySelector('#divide');
divide.addEventListener('click', () => {
  screen.innerText += '÷';
});
const four = document.querySelector('#four');
four.addEventListener('click', () => {
  screen.innerText += '4';
});
const five = document.querySelector('#five');
five.addEventListener('click', () => {
  screen.innerText += '5';
});
const six = document.querySelector('#six');
six.addEventListener('click', () => {
  screen.innerText += '6';
});
const multiply = document.querySelector('#multiply');
multiply.addEventListener('click', () => {
  screen.innerText += 'x';
});
const one = document.querySelector('#one');
one.addEventListener('click', () => {
  screen.innerText += '1';
});
const two = document.querySelector('#two');
two.addEventListener('click', () => {
  screen.innerText += '2';
});
const three = document.querySelector('#three');
three.addEventListener('click', () => {
  screen.innerText += '3';
});
const subtract = document.querySelector('#subtract');
subtract.addEventListener('click', () => {
  screen.innerText += '-';
});
const zero = document.querySelector('#zero');
zero.addEventListener('click', () => {
  screen.innerText += '0';
});
const decimal = document.querySelector('#decimal');
decimal.addEventListener('click', () => {
  screen.innerText += '.';
});
const equals = document.querySelector('#equals');
equals.addEventListener('click', () => {
  screen.innerText += '=';
});
const add = document.querySelector('#add');
add.addEventListener('click', () => {
  screen.innerText += '+';
});
const firstNumber = 0;
const operator = '';
const secondNumber = 0;

function addition(a, b) {
  return a + b;
}

function subtraction(a, b) {
  return a - b;
}

function multiplication(a, b) {
  return a * b;
}

function division(a, b) {
  return a / b;
}

function operate(a, operator, b) {
  if (operator == '+') {
    addition(a,b);
  } else if (operator == '-') {
    subtraction(a,b);
  } else if (operator == '*') {
    multiplication(a,b);
  } else if (operator == '/') {
    division(a,b);
  }
}

function clearCalculator() {

}
