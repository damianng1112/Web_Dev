"use strict";

//class which contains all the functions of the calculator
class Calculator {
  //parameters of the calculator class
  constructor(previousOperandTextElement, currentOperandTextElement) {
    this.previousOperandTextElement = previousOperandTextElement
    this.currentOperandTextElement = currentOperandTextElement
    this.clear()
  }

  //clears all text and operation stored
  clear() {
    this.currentOperand = ''
    this.previousOperand = ''
    this.operation = undefined
  }

  //deletes the last number entered
  delete() {
    this.currentOperand = this.currentOperand.toString().slice(0, -1)
  }

  //adds on the new number entered to the current operand
  appendNumber(number) {
    if (number === '.' && this.currentOperand.includes('.')) return
    this.currentOperand = this.currentOperand.toString() + number.toString()
  }

  //select the operations and shifts the current operand to the previous operand
  //if an operation already exist, it evaluates the previous operand with the current operand
  chooseOperation(operation) {
    if (this.currentOperand === '') return
    if (this.previousOperand !== '') {
      this.eval()
    }
    this.operation = operation
    this.previousOperand = this.currentOperand
    this.currentOperand = ''
  }

  //evaluates the previous operand with the current operand depending on the operation
  eval() {
    let evaluation
    const prev = parseFloat(this.previousOperand)
    const current = parseFloat(this.currentOperand)
    if (isNaN(prev) || isNaN(current)) return
    switch (this.operation) {
      case '+':
        evaluation = prev + current
        break
      case '-':
        evaluation = prev - current
        break
      case '*':
        evaluation = prev * current
        break
      case '÷':
        evaluation = prev / current
        break
      default:
        return
    }
    this.currentOperand = evaluation
    this.operation = undefined
    this.previousOperand = ''
  }

  //adds comma after every 3 digits and after '.' will not appear any comma
  getDisplayNumber(number) {
    const stringNumber = number.toString()
    const integerDigits = parseFloat(stringNumber.split('.')[0])
    const decimalDigits = stringNumber.split('.')[1]
    let integerDisplay
    if (isNaN(integerDigits)) {
      integerDisplay = ''
    } else {
      integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits: 0 })
    }
    if (decimalDigits != null) {
      return `${integerDisplay}.${decimalDigits}`
    } else {
      return integerDisplay
    }
  }

  //updates the output
  updateDisplay() {
    this.currentOperandTextElement.innerText =
      this.getDisplayNumber(this.currentOperand)
    if (this.operation != null) {
      this.previousOperandTextElement.innerText =
        `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`
    } else {
      this.previousOperandTextElement.innerText = ''
    }
  }
}

const $ = (selector) => document.querySelector(selector)

//variables for all buttons
const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = $('[data-equals]')
const deleteButton = $('[data-delete]')
const allClearButton = $('[data-all-clear]')
const previousOperandTextElement = $('[data-previous-operand]')
const currentOperandTextElement = $('[data-current-operand]')

//creating object calculator with class Calculator
const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

//inputing numbers
numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    calculator.appendNumber(button.innerText)
    calculator.updateDisplay()
  })
})

//assigning operation to calculation
operationButtons.forEach(button => {
  button.addEventListener('click', () => {
    calculator.chooseOperation(button.innerText)
    calculator.updateDisplay()
  })
})

//evaluate the previous and current operand
equalsButton.addEventListener('click', button => {
  calculator.eval()
  calculator.updateDisplay()
})

//clear all inputs
allClearButton.addEventListener('click', button => {
  calculator.clear()
  calculator.updateDisplay()
})

//backspace
deleteButton.addEventListener('click', button => {
  calculator.delete()
  calculator.updateDisplay()
})