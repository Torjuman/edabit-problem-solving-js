/*Area of a Rectangle
Create a function that calculates the area of a rectangle. If the arguments are invalid, your function must return -1.

Examples
area(3, 4) ➞ 12

area(10, 11) ➞ 110

area(-1, 5) ➞ -1

area(0, 2) ➞ -1
Notes
N/A*/

function area(width, length) {
  return width > 0 && length > 0 ? width * length : -1;
}

console.log(area(3, 4));

console.log(area(10, 11));

console.log(area(-1, 5));

console.log(area(0, 2));
