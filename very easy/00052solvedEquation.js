/*Solve the Equation
Create a function that takes an equation (e.g. "1+1"), and returns the answer.

Examples
equation("1+1") ➞ 2

equation("7*4-2") ➞ 26

equation("1+1+1+1+1") ➞ 5
Notes
Supported operators are +, -, and *.*/

function equation(str) {
  return eval(str);
}

console.log(equation("1+1"));

console.log(equation("7*4-2"));

console.log(equation("1+1+1+1+1"));
