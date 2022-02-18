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

// state storage
const storage = {
  firstNumber: '',
  secondNumber: '',
  operation: '',
};

// button clickEventListeners
btnAc.addEventListener('click', () => {
  clear();
  display('');
});
btnBack.addEventListener('click', () => {
  back();
});
btn1.addEventListener('click', () => {
  storeNumber('1');
  chooseDisplay();
});
btn2.addEventListener('click', () => {
  storeNumber('2');
  chooseDisplay();
});
btn3.addEventListener('click', () => {
  storeNumber('3');
  chooseDisplay();
});
btn4.addEventListener('click', () => {
  storeNumber('4');
  chooseDisplay();
});
btn5.addEventListener('click', () => {
  storeNumber('5');
  chooseDisplay();
});
btn6.addEventListener('click', () => {
  storeNumber('6');
  chooseDisplay();
});
btn7.addEventListener('click', () => {
  storeNumber('7');
  chooseDisplay();
});
btn8.addEventListener('click', () => {
  storeNumber('8');
  chooseDisplay();
});
btn9.addEventListener('click', () => {
  storeNumber('9');
  chooseDisplay();
});
btn0.addEventListener('click', () => {
  storeNumber('0');
  chooseDisplay();
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
  alert('Decimals not yet implemented!');
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
  if (b === '0') {
    display('ERROR');
    clear();
  } else if (b !== '0') {
    let result = +a / +b;
    return Math.round(result).toString();
  }
}

// other functions
function display(value) {
  let onScreen = document.getElementById('display');
  if (value.length > 8) {
    onScreen.innerHTML = `TO BIG`;
    clear();
  } else if (value < 0) {
    onScreen.innerHTML = 'NEG.NUM'
    clear();
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
  } else if (!storage.operation) {
    if (storage.firstNumber === '0') {
      storage.firstNumber = '';
    }
    storage.firstNumber += number;
  } else if (storage.operation) {
    if (storage.secondNumber === '0') {
      storage.secondNumber = '';
    }
    storage.secondNumber += number;
  }
}

function storeOperation(operation) {
  if (!storage.operation && storage.firstNumber) {
    storage.operation = operation;
  } else if (storage.secondNumber) {
    operate();
    display(storage.firstNumber);
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

function back() {
  if (!storage.operation) {
    let auxVar = storage.firstNumber;
    auxVar = auxVar.split('');
    auxVar.pop();
    storage.firstNumber = auxVar.join('');
    display(storage.firstNumber);
  } else if (storage.operation) {
    let auxVar = storage.secondNumber;
    auxVar = auxVar.split('');
    auxVar.pop();
    storage.secondNumber = auxVar.join('');
    display(storage.secondNumber);
  }
}

// choose whether to display first or second number
function chooseDisplay() {
  if (!storage.operation) {
    display(storage.firstNumber);
  } else {
    display(storage.secondNumber);
  }
}

// keyboard support
document.addEventListener('keypress', (e) => {
  switch (e.code) {
    case 'Numpad0':
    case 'Digit0':
      storeNumber('0');
      chooseDisplay();
      break;
    case 'Numpad1':
    case 'Digit1':
      storeNumber('1');
      chooseDisplay();
      break;
    case 'Numpad2':
    case 'Digit2':
      storeNumber('2');
      chooseDisplay();
      break;
    case 'Numpad3':
    case 'Digit3':
      storeNumber('3');
      chooseDisplay();
      break;
    case 'Numpad4':
    case 'Digit4':
      storeNumber('4');
      chooseDisplay();
      break;
    case 'Numpad5':
    case 'Digit5':
      storeNumber('5');
      chooseDisplay();
      break;
    case 'Numpad6':
    case 'Digit6':
      storeNumber('6');
      chooseDisplay();
      break;
    case 'Numpad7':
    case 'Digit7':
      storeNumber('7');
      chooseDisplay();
      break;
    case 'Numpad8':
    case 'Digit8':
      storeNumber('8');
      chooseDisplay();
      break;
    case 'Numpad9':
    case 'Digit9':
      storeNumber('9');
      chooseDisplay();
      break;
    case 'Enter':
    case 'NumpadEnter':
      btnEquals.focus();
      operate();
      display(storage.firstNumber)
      break;
    case 'Add':
    case 'NumpadAdd':
      storeOperation('add');
      break;
    case 'Subtract':
    case 'NumpadSubtract':
      storeOperation('subtract');
      break;
    case 'Multiply':
    case 'NumpadMultiply':
      storeOperation('multiply');
      break;
    case 'Divide':
    case 'NumpadDivide':
      storeOperation('divide');
      break;
    case 'Delete':
      back();
      break;
    case 'NumpadDecimal':
      alert('Decimals not yet implemented!');
      break;
  }
});