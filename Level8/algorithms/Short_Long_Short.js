// Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. The strings will not be the same length, but they may be empty ( zero length ).

// Hint for R users:

// The length of string is not always the same as the number of characters
// For example: (Input1, Input2) --> output

//("1", "22") --> "1221"
//("22", "1") --> "1221"

//MY SOLUTION

function solution(a, b){
  // determine length of 0 should only return the non-0 string
  // can both strings be 0 length?
  // can the input be anything other than a string?
  // are there any scenarios that I may not have asked?
  // return a string 
  // where the shorter string is duplicated to take the first and last position, to 'sandwich' the longer string
  if (a.length === 0) {
    return b;
  } else if (a.length <= b.length) {
    return (a + b + a)
  } else {
    return (b + a + b)
  }
}