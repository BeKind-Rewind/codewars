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
// In this Kata, a string is said to be in ALL CAPS whenever it does not 
// contain any lowercase letter so any string containing no letters at all 
// is trivially considered to be in ALL CAPS.

// FUNDAMENTALSSTRINGS

// SOLUTION

String.prototype.isUpperCase = function () { return this == this.toUpperCase() }

// this is an odd one - need more review of prototype 
// elegant solution
String.prototype.isUpperCase = function () { return this == this.toUpperCase() }

// iterated solution - arguably the best for dealing with large strings
String.prototype.isUpperCase = function () {
  if (this.toString() == this.toUpperCase()) {
    return true;
  } else {
    return false;
  }
}