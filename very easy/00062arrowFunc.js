/*Arrow Functions
In the Code tab you will find code that is missing a single character in order to pass the tests. However, your goal is to submit a function as minimalist as possible. Use the tips in the tips section below.

Write five adder functions:

add2(x) should return 2 + x.
add3(x) should return 3 + x.
add5(x) should return 5 + x.
add7(x) should return 7 + x.
add11(x) should return 11 + x.
Tips
Functions that consists only of a return, can be written as oneliner with an arrow function.

For example, the code:

function areSame(a, b) {
    return a == b;
}
Can be simplified to:

areSame = (a, b) => a == b;
Bonus
(a, b) => a == b is technically an anonymous function. However, it can be assigned to the identifier areSame and it can then be called using areSame().

Notes
This is an open series: there isn't a definite list of features for the challenges. Please, do not hesitate to leave your suggestions in the Comments.
Readability is indeed a subjective concept. Let's discuss it! Feel free to leave your opinion in the Comments.

function add2(x) {
	return x + 2;
}

function add3(x) {
	return x + 3;
}

function add5(x) {
	return x + 5;
}

function add7(x) {
	return x + 7;
}
*/

let add2 = (x) => 2 + x;
let add3 = (x) => 3 + x;
let add5 = (x) => 5 + x;
let add7 = (x) => 7 + x;
let add11 = (x) => 11 + x;

console.log(add2(5));
console.log(add3(5));
console.log(add5(5));
console.log(add7(5));
console.log(add11(5));
