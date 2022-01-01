/*Return Types
Create a function that takes an array and returns the types of values (data types) in a new array.

Examples
arrayValuesTypes([1, 2, "null", []])
➞ ["number", "number", "string", "object"]

arrayValuesTypes(["214", true, false, 2, 2.15, [], null])
➞ ["string", "boolean", "boolean", "number", "number", "object", "object"]

arrayValuesTypes([21.1, "float", "array", ["I am array"], null, true, 214])
➞ ["number", "string", "string", "object", "object", "boolean", "number"]
Notes
Check the Resources tab for help if needed.
Remember Arrays & Null in JS are treated as object, hence the examples*/

function arrayValuesTypes(arr) {
  let arr2 = [];
  for (let i = 0; i < arr.length; i++) {
    let temp = typeof arr[i];
    arr2.push(temp);
  }
  return arr2;
}

console.log(arrayValuesTypes([1, 2, "null", []]));

console.log(arrayValuesTypes(["214", true, false, 2, 2.15, [], null]));
console.log(
  arrayValuesTypes([21.1, "float", "array", ["I am array"], null, true, 214])
);