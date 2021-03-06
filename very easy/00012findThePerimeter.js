/**Find the Perimeter of a Rectangle
Create a function that takes length and width and finds the perimeter of a rectangle.

Examples
findPerimeter(6, 7) ➞ 26

findPerimeter(20, 10) ➞ 60

findPerimeter(2, 9) ➞ 22
Notes
Don't forget to return the result.
If you're stuck, find help in the Resources tab.
If you're really stuck, find solutions in the Solutions tab.*/

function findPerimeter(rectLength, rectWidth) {
  let rectPerimeter = 2 * (rectLength + rectWidth);
  return rectPerimeter;
}

console.log(findPerimeter(6, 7));

console.log(findPerimeter(20, 10));

console.log(findPerimeter(2, 9));
