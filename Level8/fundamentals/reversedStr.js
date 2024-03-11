// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'
// STRINGSFUNDAMENTALS

// SOLUTION

function solution(str) {
  return str.split("").reverse().join("");
}

// refactored

const solution = str => str.split('').reverse().join('');