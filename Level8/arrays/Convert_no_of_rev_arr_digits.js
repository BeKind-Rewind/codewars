// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example(Input => Output):
// 35231 => [1,3,2,5,3]
// 0 => [0]
// ARRAYSFUNDAMENTALS

// MY CODE

let digits = Array.from(String(n), Number); // Array.from creates an array from the first arg and maps with the second arg
let reversedDigits = [];
for (let i = 0; i < digits.length; i++) {
  reversedDigits.unshift(digits[i]); // .unshift() adds elements from the arg to the beginning of the chained array
}

return reversedDigits;

// OTHERS