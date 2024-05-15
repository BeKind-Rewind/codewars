// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)
// STRINGSFUNDAMENTALS

// SOLUTION

function isIsogram(str){
  let isoStr = str.toLowerCase()
  let newStr = ""
  for (let i = 0 ; i < str.length ; i++ ){
    if(!newStr.includes(isoStr[i])) {
      newStr += isoStr[i]
    } else {
      return false
    }
  }
  return true
}

// better solution!

function isIsogram(str){
	return new Set(str.toUpperCase()).size == str.length;
}