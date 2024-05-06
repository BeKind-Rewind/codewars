// You'll be given a string of characters as an input. Complete the function that returns a list of strings: (a) in the reverse order of the original string, and (b) with each successive string starting one character further in from the end of the original string.

// Assume the original string is at least 3 characters long. Try to do this using slices and avoid converting the string to a list.

// Examples
// '123'   ==>  ['321', '21', '1']
// 'abcde' ==>  ['edcba', 'dcba', 'cba', 'ba', 'a']
// STRINGSFUNDAMENTALS

// SOLUTION

function reverseSlice(str) {
  // first, reverse the str
  let revStr = ""
  let newSlice = []
  for (let i = str.length -1; i >= 0 ; i--) {
    revStr += str[i]
  } 
  for (let i = 0; i < str.length ; i++) {
    newSlice.push(revStr.slice(i, str.length))
    
  }
  return newSlice
}

// more eloquent solution

function reverseSlice(str) {
  var rev = str.split('').reverse().join('');;
  var result = [];
  for(var i=0;i<str.length;i++)
  {
    result.push(rev.slice(i));
  }
  return result;
}

