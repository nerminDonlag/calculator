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

// button clickEventListeners
btnAc.addEventListener('click', () => {
  display('');
});
btnBack.addEventListener('click', () => {
  alert('btn-back');
});
btn1.addEventListener('click', () => {
  display('1');  
});
btn2.addEventListener('click', () => {
  display('2');  
});
btn3.addEventListener('click', () => {
  display('3');  
});
btn4.addEventListener('click', () => {
  display('4');  
});
btn5.addEventListener('click', () => {
  display('5');  
});
btn6.addEventListener('click', () => {
  display('6');  
});
btn7.addEventListener('click', () => {
  display('7');  
});
btn8.addEventListener('click', () => {
  display('8');  
});
btn9.addEventListener('click', () => {
  display('9');  
});
btn0.addEventListener('click', () => {
  display('0');  
});
btnDivide.addEventListener('click', () => {
  alert('btn-divide');  
});
btnMultiply.addEventListener('click', () => {
  alert('btn-multiply');  
});
btnSubtract.addEventListener('click', () => {
  alert('btn-subtract');  
});
btnAdd.addEventListener('click', () => {
  alert('btn-add');  
});
btnEquals.addEventListener('click', () => {
  alert('btn-equals');  
});
btnDot.addEventListener('click', () => {
  alert('btn-dot');  
});

// functions +, -, *, /
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function display(value) {
  document.getElementById('display').innerHTML = `${value}`;
}