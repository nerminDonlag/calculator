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