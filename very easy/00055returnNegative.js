/*Return Negative
Create a function that takes a number as an argument and returns negative of that number. Return negative numbers without any change.

Examples
returnNegative(4) ➞ -4

returnNegative(15) ➞ -15

returnNegative(-4) ➞ -4

returnNegative(0) ➞ 0
Notes
N/A*/

function returnNegative(num) {
  let newNum = Math.abs(num);
  return newNum === 0 ? 0 : -newNum;
}

console.log(returnNegative(4));

console.log(returnNegative(15));

console.log(returnNegative(-4));

console.log(returnNegative(0));
