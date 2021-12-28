/**Return the Next Number from the Integer Passed
Create a function that takes a number as an argument, increments the number by +1 and returns the result.

Examples
addition(0) ➞ 1

addition(9) ➞ 10

addition(-3) ➞ -2
Notes
Don't forget to return the result.
If you get stuck on a challenge, find help in the Resources tab.
If you're really stuck, unlock solutions in the Solutions tab.*/

function returnTheNextNum(numberPassed) {
  let result = numberPassed + 1;
  return result;
}

console.log(returnTheNextNum(0));
console.log(returnTheNextNum(9));
console.log(returnTheNextNum(-3));
