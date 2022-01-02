/*Nth Even Number
Create a function that takes a number n and returns the nth even number beginning with 0 as the first.

Examples
nthEven(1) ➞ 0
// 0 is first even number

nthEven(2) ➞ 2
// 2 is second even number

nthEven(100) ➞ 198
Notes
N/A*/

function nthEven(n) {
  return n * 2 - 2;
}

console.log(nthEven(1));

console.log(nthEven(2));

console.log(nthEven(100));
