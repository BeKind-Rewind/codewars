// Given an array of ones and zeroes, convert the equivalent binary value to an integer.

// Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

// Examples:

// Testing: [0, 0, 0, 1] ==> 1
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 0, 1] ==> 5
// Testing: [1, 0, 0, 1] ==> 9
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 1, 0] ==> 6
// Testing: [1, 1, 1, 1] ==> 15
// Testing: [1, 0, 1, 1] ==> 11
// However, the arrays can have varying lengths, not just limited to 4.

// FUNDAMENTALSARRAYS

// SOLUTION

const binaryArrayToNumber = arr => {
  // declare a let for a new string
  let binary = "";
  // loop through the array, each loop adding as a string char
  for (let i = 0; i < arr.length ; i++){
    if (arr[i] === 0){
      binary += "0";
    } else {
      binary += "1"
    }
  }
  // convert string in binary to number
  return parseInt(binary, 2);
};

// lessons: use parseInt to convert a binary string to a decimal number; it takes 2 args --> the binary string and the radix (the number system used for binary would be 2)