// Simple Calculator

function calculator(operator, num1, num2) {
    switch (operator) {
      case '+': return num1 + num2;
      case '-': return num1 - num2;
      case '*': return num1 * num2;
      case '/': return num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
      default: return "Invalid operator";
    }
  }
  
  console.log(calculator('+', 5, 3)); // 8
  console.log(calculator('*', 4, 7)); // 28
  