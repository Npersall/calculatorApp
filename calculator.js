'Use Strict';

class Calculator {
  constructor(displayValue) {
  this.displayValue = displayValue;
  this.firstOperand =  null;
  this.waitingForSecondOperand = false;
  this.operator= null;
  }
   updateDisplay(value) {
     const display = document.querySelector(".calculator-screen");
    this.displayValue = value;
    display.value = this.displayValue;
  }
}

const calculator = new Calculator();
console.log(calculator);
calculator.updateDisplay(0);



//   const keys = document.querySelector('.calculator-keys');
//   keys.addEventListener(`click`, (event) => {
//     const{ target } = event;
//     if (!target.matches('button')) {
//       return;
//     }

//   if (target.classList.contains('operator')) {
//     console.log('operator', target.value);
//     return;
//   }

//   if (target.classList.contains('decimal')) {
//     console.log('decimal', target.value);
//     return;
//   }
// if (target.classList.contains('all-clear')) {
//   console.log('clear', target.value);
//   return;
// }

// console.log('digit', target.value);


