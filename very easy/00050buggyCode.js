/*Buggy Code
The challenge is to try and fix this buggy code, given the inputs true and false. See the examples below for the expected output.

Examples
has_bugs(true) ➞ "sad days"

has_bugs(false) ➞ "it's a good day"
Notes
Don't overthink this challenge (look at the syntax and correct it).

function has_bugs(buggy_code) {
	if (buggyCode) {
		return 'sad days'
	} else if {
		return 'it's a good day'
	}
}
*/

function has_bugs(buggy_code) {
  if (buggy_code) {
    return "sad days";
  } else {
    return "it's a good day";
  }
}

console.log(has_bugs(true));

console.log(has_bugs(false));
