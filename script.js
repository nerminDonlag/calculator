// button variables
const btnAc = document.getElementById('btn-ac');
const btnBack = document.getElementById('btn-back');
const btn1 = document.getElementById('btn-1');
const btn2 = document.getElementById('btn-2');
const btn3 = document.getElementById('btn-3');
const btn4 = document.getElementById('btn-4');
const btn5 = document.getElementById('btn-5');
const btn6 = document.getElementById('btn-6');
const btn7 = document.getElementById('btn-7');
const btn8 = document.getElementById('btn-8');
const btn9 = document.getElementById('btn-9');
const btn0 = document.getElementById('btn-0');
const btnDivide = document.getElementById('btn-divide');
const btnMultiply = document.getElementById('btn-multiply');
const btnSubtract = document.getElementById('btn-subtract');
const btnAdd = document.getElementById('btn-add');
const btnEquals = document.getElementById('btn-equals');
const btnDot = document.getElementById('btn-dot');

//
const storage = {
  firstNumber: '',
  secondNumber: '',
  operation: '',
};

// button clickEventListeners
btnAc.addEventListener('click', () => {
  clear();
  display('0');
});
btnBack.addEventListener('click', () => {
  alert('btn-back');
});
btn1.addEventListener('click', () => {
  display('1');
  storeNumber('1');
});
btn2.addEventListener('click', () => {
  display('2');
  storeNumber('2');
});
btn3.addEventListener('click', () => {
  display('3');
  storeNumber('3');
});
btn4.addEventListener('click', () => {
  display('4');
  storeNumber('4');
});
btn5.addEventListener('click', () => {
  display('5');
  storeNumber('5');
});
btn6.addEventListener('click', () => {
  display('6');
  storeNumber('6');
});
btn7.addEventListener('click', () => {
  display('7');
  storeNumber('7');
});
btn8.addEventListener('click', () => {
  display('8');
  storeNumber('8');
});
btn9.addEventListener('click', () => {
  display('9');
  storeNumber('9');
});
btn0.addEventListener('click', () => {
  display('0');
  storeNumber('0');
});
btnDivide.addEventListener('click', () => {
  storeOperation('divide');
});
btnMultiply.addEventListener('click', () => {
  storeOperation('multiply');
});
btnSubtract.addEventListener('click', () => {
  storeOperation('subtract');
});
btnAdd.addEventListener('click', () => {
  storeOperation('add');
});
btnEquals.addEventListener('click', () => {
  operate();
  display(storage.firstNumber);
});
btnDot.addEventListener('click', () => {
  alert('btn-dot');
});

// functions +, -, *, /
function add(a, b) {
  let result = +a + +b;
  return result.toString();
}

function subtract(a, b) {
  let result = +a - +b;
  return result.toString();
}

function multiply(a, b) {
  let result = +a * +b;
  return result.toString();
}

function divide(a, b) {
  if (b === '0') { display('ERROR'); }
  let result = +a / +b;
  return Math.round(result).toString();
}

function display(value) {
  let onScreen = document.getElementById('display');
  if (value.length > 8) {
    onScreen.innerHTML = `TO BIG`;
  } else {
    onScreen.innerHTML = `${value}`;
  }
}

function clear() {
  storage.firstNumber = '';
  storage.secondNumber = '';
  storage.operation = '';
}

function storeNumber(number) {
  if (!storage.firstNumber) {
    storage.firstNumber = number;
  } else {
    storage.secondNumber = number;
  }
}

function storeOperation(operation) {
  if (!storage.operation) {
    storage.operation = operation;
  }
}

function operate() {
  if (storage.firstNumber && storage.secondNumber && storage.operation) {
    switch (storage.operation) {
      case 'add':
        storage.firstNumber = add(storage.firstNumber, storage.secondNumber);
        storage.secondNumber = '';
        storage.operation = '';
        break;
      case 'subtract':
        storage.firstNumber = subtract(storage.firstNumber, storage.secondNumber);
        storage.secondNumber = '';
        storage.operation = '';
        break;
      case 'multiply':
        storage.firstNumber = multiply(storage.firstNumber, storage.secondNumber);
        storage.secondNumber = '';
        storage.operation = '';
        break;
      case 'divide':
        storage.firstNumber = divide(storage.firstNumber, storage.secondNumber);
        storage.secondNumber = '';
        storage.operation = '';
        break;
    }
  }
}

//temp outpt
const tempOutput = document.getElementById('temp-output');
const container = document.getElementById('container');
container.addEventListener('click', () => {
  tempOutput.innerHTML = `storage content:<br>first: ${storage.firstNumber} ${typeof storage.firstNumber}<br>second: ${storage.secondNumber} ${typeof storage.secondNumber}<br>operation: ${storage.operation}`;
});