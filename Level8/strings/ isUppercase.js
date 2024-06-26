// DESCRIPTION:
// Is the string uppercase?
// Task
// Create a method to see whether the string is ALL CAPS.

// Examples (input -> output)
// "c" -> False
// "C" -> True
// "hello I AM DONALD" -> False
// "HELLO I AM DONALD" -> True
// "ACSKLDFJSgSKLDFJSKLDFJ" -> False
// "ACSKLDFJSGSKLDFJSKLDFJ" -> True
// In this Kata, a string is said to be in ALL CAPS whenever it does not contain any lowercase letter so any string containing no letters at all is trivially considered to be in ALL CAPS.

// FUNDAMENTALSSTRINGS

// SOLUTION, technically this works on its own but not what the kata is looking for

function isUpper(string) {
  return (string.toUpperCase() === string) ? true : false
 }

// prototype solution

String.prototype.isUpperCase=function() {return this==this.toUpperCase()}
