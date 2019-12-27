'Use Strict';

class Calculator {
  constructor(target) {
    this.displayValue = 0;
    this.firstOperand =  null;
    this.waitingForSecondOperand = false;
    this.operator = null;
    this.target = null;
    this.updateDisplay = function() {
      const displayValue = 0;
      const display = document.querySelector(".calculator-screen");
      display.value = this.displayValue;
  };

    // keyPress(e)
      // const keys = document.getElementById('.calculator-keys');
      // keys.addEventListener('click', (event) => {
      //   this.target= event;
      //   if (!target.matches('button')) {
      //     return;
      //   }

        // if(target.classlist.contains('operator')) {
        //   console.log('operator', target.value);
        //   return;
        // }

      // });
    }

}

const calculator = new Calculator;
// calculator.keyPress(2);


  // const keys = document.querySelector('.calculator-keys');
  // keys.addEventListener(`click`, (event) => {
  //   const{ target } = event;
  //   if (!target.matches('button')) {
  //     return;
  //   }

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


