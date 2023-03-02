const previousOperationText = document.querySelector("#previous-operation")
const currentOperationText = document.querySelector("#current-operation")
const button = document.querySelectorAll("#buttons-container button")
class calculator {
constructor(previousOperationText , currentOperationText) {
this.previousOperationText = previousOperationText
this.currentOperationText = currentOperationText
this.currentOperation = ""
}
addDigit(digit) {
if(digit === "." && this.currentOperationText.innerText.includes(".")) {
    return
}


    this.currentOperation = digit
    this.updateScreen()
}

processOperation(operation) {
   
    let operationValue ;
    let previous = +this.previousOperationText.innerText.split(" ")[];
    let current = +this.currentOperationText.innerText;


    switch(operation) {
        case "+" :
        operationValue = previous + current
        this.updateScreen(operationValue , operation , current , previous)
        break;
        default:
            return
    }

}


updateScreen(
    operationValue = null, 
    operation = null , 
    current = null , 
    previous = null
    ) {
 console.log(operationValue , operation , current , previous)

  if(operationValue === null ){
    this.currentOperationText.innerText += this.currentOperation;
  } else {
    // check zero 
    if(previous === 0 ) {
        operation = current
    }
    this.previousOperationText.innerText = '$ (operationValue) $(operation)'
    this.currentOperationText.innerText = ""
  }
}
}

const calc = new calculator(previousOperationText,currentOperationText);


button.forEach((btn) => {
    btn.addEventListener("click" , (e) => {

   const value = e.target.innerText;

   

   if(+value >= 0 || value === ".") {
    calc.addDigit(value);
   }else {
    calc.processOperation(value)
   }

});
});