/*Find Out the Leap Year
A leap year happens every four years, so it's a year that is perfectly divisible by four. However, if the year is a multiple of 100 (1800, 1900, etc), the year must be divisible by 400.

Write a function that determines if the year is a leap year or not.

Examples
leapYear(2020) ➞ true

leapYear(2021) ➞ false

leapYear(1968) ➞ true
Notes
N/A*/

function leapYear(year) {
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      return year % 400 === 0;
    }
    return true;
  } else {
    return false;
  }
}

console.log(leapYear(2020));

console.log(leapYear(2021));

console.log(leapYear(1968));

console.log(leapYear(100));

console.log(leapYear(400));
