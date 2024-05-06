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
     if (b === 0) {
         return 'error cannot divide by zero';
     }
     return a / b;
 }
 
 function operate(operator, num1, num2) {
     switch (operator) {
         case '+':
             return add(num1, num2);
         case '-':
             return subtract(num1, num2);
         case '*':
             return multiply(num1, num2);
         case '/':
             return divide(num1, num2);
         default:
             return "Invalid operator";
     }
 }
 
 let displayValue = '0';
 let firstNumber = null;
 let operator = null;
 
 // Function to update display
 function updateDisplay() {
     document.getElementById('display').value = displayValue;
 }
 
 function appendNumber(number) {
     if (displayValue === '0') {
         displayValue = '';
     }
     displayValue += number;
     updateDisplay();
 }
 
 // Function to set the operator
 function setOperator(op) {
     if (firstNumber === null) {
         firstNumber = parseFloat(displayValue);
         operator = op;
         displayValue = '0';
     } else {
         // Store the operator
         operator = op;
         // Calculate with the new operator
         calculate();
     }
 }
 
 // Function to perform the calculation
 function calculate() {
     if (firstNumber !== null && operator !== null) {
         const secondNumber = parseFloat(displayValue);
         displayValue = operate(operator, firstNumber, secondNumber);
         if (displayValue === 'error cannot divide by zero') {
             // Display error message
             updateDisplay();
             alert('cannot divide by zero');
             clearDisplay();
             return;
         }
         displayValue = Math.round(displayValue * 100) / 100;
         firstNumber = null;
         operator = null;
         updateDisplay();
     }
 }
 
 function clearDisplay() {
     displayValue = '0';
     firstNumber = null;
     operator = null;
     updateDisplay();
 }