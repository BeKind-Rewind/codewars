// You will be given a list of strings. You must sort it alphabetically (case-sensitive,
// and based on the ASCII values of the chars) and then return the first value.

// The returned value must be a string, and have "***" between each of its letters.

// You should not remove or add elements from/to the array.

// FUNDAMENTALSSTRINGSARRAYSSORTING

// GIVEN

// SOLUTION - How to use 'sort()[0]' : Array.sort() returns a reference to the array it just performed its sort algorithm on, 
// so you can immediately access the array just as you would any other array.

function twoSort(s) {
  return s.sort()[0].split('').join('***');
}