const calculator = (() => {

  let currentOperand = 0
  let savedOperand = ''
  let operator = ''

  //cache
  const cache = document.querySelector('.container')
  const top = cache.querySelector('[top]')
  const main = cache.querySelector('[main]')
  const ac = cache.querySelector('[ac]')
  const back = cache.querySelector('[back]')
  const zero = cache.querySelector('[zero]')
  const one = cache.querySelector('[one]')
  const two = cache.querySelector('[two]')
  const three = cache.querySelector('[three]')
  const four = cache.querySelector('[four]')
  const five = cache.querySelector('[five]')
  const six = cache.querySelector('[six]')
  const seven = cache.querySelector('[seven]')
  const eight = cache.querySelector('[eight]')
  const nine = cache.querySelector('[nine]')
  const addition = cache.querySelector('[addition]')
  const subtraction = cache.querySelector('[subtraction]')
  const multiplication = cache.querySelector('[multiplication]')
  const division = cache.querySelector('[division]')
  const equality = cache.querySelector('[equality]')
  const dot = cache.querySelector('[dot]')

  //event listeners
  ac.addEventListener('click', () => {
    clear()
    render()
  })
  back.addEventListener('click', () => {
    const length = currentOperand.toString().length
    if (length === 1) {
      currentOperand = 0
    } else {
      currentOperand = Number(currentOperand.toString().slice(0, length - 1))
    }
    render()
  })
  zero.addEventListener('click', () => {
    if (currentOperand.toString().includes(".")) {
      currentOperand = currentOperand.toString() + '0'
    } else {
      currentOperand = Number(currentOperand.toString() + '0')
    }
    render()
  })
  one.addEventListener('click', () => {
    currentOperand = Number(currentOperand.toString() + '1')
    render()
  })
  two.addEventListener('click', () => {
    currentOperand = Number(currentOperand.toString() + '2')
    render()
  })
  three.addEventListener('click', () => {
    currentOperand = Number(currentOperand.toString() + '3')
    render()
  })
  four.addEventListener('click', () => {
    currentOperand = Number(currentOperand.toString() + '4')
    render()
  })
  five.addEventListener('click', () => {
    currentOperand = Number(currentOperand.toString() + '5')
    render()
  })
  six.addEventListener('click', () => {
    currentOperand = Number(currentOperand.toString() + '6')
    render()
  })
  seven.addEventListener('click', () => {
    currentOperand = Number(currentOperand.toString() + '7')
    render()
  })
  eight.addEventListener('click', () => {
    currentOperand = Number(currentOperand.toString() + '8')
    render()
  })
  nine.addEventListener('click', () => {
    currentOperand = Number(currentOperand.toString() + '9')
    render()
  })
  addition.addEventListener('click', () => {
    handler()
    operator = '+'
    render()
  })
  subtraction.addEventListener('click', () => {
    handler()
    operator = '–'
    render()
  })
  multiplication.addEventListener('click', () => {
    handler()
    operator = 'x'
    render()
  })
  division.addEventListener('click', () => {
    handler()
    operator = '÷'
    render()
  })
  equality.addEventListener('click', () => {
    if (operator !== '') {
      currentOperand = calculate(Number(currentOperand), Number(savedOperand), operator)
      savedOperand = ''
      operator = ''
    }
    render()
  })
  dot.addEventListener('click', () => {
    if (!currentOperand.toString().includes(".")) {
      currentOperand = currentOperand.toString() + '.'
    }
    render()
  })

  //keyboard support
  document.addEventListener('keydown', (event) => {
    switch (event.code) {
      case 'Delete':
        clear()
        render()
        break
      case 'Backspace':
        const length = currentOperand.toString().length
        if (length === 1) {
          currentOperand = 0
        } else {
          currentOperand = Number(currentOperand.toString().slice(0, length - 1))
        }
        render()
        break
      case 'Digit0':
      case 'Numpad0':
        if (currentOperand.toString().includes(".")) {
          currentOperand = currentOperand.toString() + '0'
        } else {
          currentOperand = Number(currentOperand.toString() + '0')
        }
        render()
        break
      case 'Digit1':
      case 'Numpad1':
        currentOperand = Number(currentOperand.toString() + '1')
        render()
        break
      case 'Digit2':
      case 'Numpad2':
        currentOperand = Number(currentOperand.toString() + '2')
        render()
        break
      case 'Digit3':
      case 'Numpad3':
        currentOperand = Number(currentOperand.toString() + '3')
        render()
        break
      case 'Digit4':
      case 'Numpad4':
        currentOperand = Number(currentOperand.toString() + '4')
        render()
        break
      case 'Digit5':
      case 'Numpad5':
        currentOperand = Number(currentOperand.toString() + '5')
        render()
        break
      case 'Digit6':
      case 'Numpad6':
        currentOperand = Number(currentOperand.toString() + '6')
        render()
        break
      case 'Digit7':
      case 'Numpad7':
        currentOperand = Number(currentOperand.toString() + '7')
        render()
        break
      case 'Digit8':
      case 'Numpad8':
        currentOperand = Number(currentOperand.toString() + '8')
        render()
        break
      case 'Digit9':
      case 'Numpad9':
        currentOperand = Number(currentOperand.toString() + '9')
        render()
        break
      case 'NumpadAdd':
        handler()
        operator = '+'
        render()
        break
      case 'NumpadSubtract':
        handler()
        operator = '–'
        render()
        break
      case 'NumpadMultiply':
        handler()
        operator = 'x'
        render()
        break
      case 'NumpadDivide':
        handler()
        operator = '÷'
        render()
        break
      case 'Enter':
      case 'NumpadEnter':
        if (operator !== '') {
          currentOperand = calculate(Number(currentOperand), Number(savedOperand), operator)
          savedOperand = ''
          operator = ''
        }
        render()
        break
      case 'NumpadDecimal':
        if (!currentOperand.toString().includes(".")) {
          currentOperand = currentOperand.toString() + '.'
        }
        render()
        break
    }
  })

  //functions
  function clear() {
    currentOperand = 0
    savedOperand = ''
    operator = ''
  }

  function calculate(a, b, op) {
    let result
    switch (op) {
      case '+':
        result = a + b
        break
      case '–':
        result = b - a
        break
      case 'x':
        result = a * b
        break
      case '÷':
        if (a === 0) {
          alert('no division with zero!')
          result = 0
        } else {
          result = b / a
        }
        break
    }
    return result
  }

  function render() {
    if (savedOperand.toString().length > 8) {
      top.textContent = `${savedOperand.toString().slice(0, 8)} ${operator}`
    } else {
      top.textContent = `${savedOperand} ${operator}`
    }
    if (currentOperand.toString().length > 8) {
      main.textContent = currentOperand.toString().slice(0, 8)
    } else {
      main.textContent = currentOperand
    }
    //remove focus after button click
    document.activeElement.blur()
  }

  function handler() {
    if (operator === '') {
      savedOperand = currentOperand
    } else {
      savedOperand = calculate(Number(currentOperand), Number(savedOperand), operator)
    }
    currentOperand = 0
  }

  return { render }
})()

calculator.render()