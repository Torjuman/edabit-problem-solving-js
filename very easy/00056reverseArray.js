/*Reverse an Array
Write a function to reverse an array.

Examples
reverse([1, 2, 3, 4]) ➞ [4, 3, 2, 1]

reverse([9, 9, 2, 3, 4]) ➞ [4, 3, 2, 9, 9]

reverse([]) ➞ []
Notes
Don't forget to return the result.
If you get stuck on a challenge, find help in the Resources tab.
If you're really stuck, unlock solutions in the Solutions tab.*/

// My own built array reverse system
function ownReverseSystem(arr) {
  for (let i = 0; i < arr.length / 2; i++) {
    let temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
  }

  console.log(arr);
}

ownReverseSystem([1, 2, 3, 4, 5, 6, 7]);

// Useing built in array reverse method

function reverse(arr) {
  return arr.reverse();
}

console.log(reverse([1, 2, 3, 4]));

console.log(reverse([9, 9, 2, 3, 4]));

console.log(reverse([]));
