function minuteToSecond(minutes) {
  let seconds = parseInt(minutes) * 60;
  return seconds;
}

console.log(minuteToSecond("5"));
console.log(minuteToSecond(3));
console.log(minuteToSecond(2));
