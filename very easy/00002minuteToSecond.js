/**Convert Minutes into Seconds
Write a function that takes an integer minutes and converts it to seconds.

Examples
convert(5) ➞ 300

convert(3) ➞ 180

convert(2) ➞ 120
Notes
Don't forget to return the result.
If you get stuck on a challenge, find help in the Resources tab.
If you're really stuck, unlock solutions in the Solutions tab.*/

function minuteToSecond(minutes) {
  let seconds = minutes * 60;
  return seconds;
}

console.log(minuteToSecond(5));
console.log(minuteToSecond(3));
console.log(minuteToSecond(2));
