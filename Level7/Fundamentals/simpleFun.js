// Task
// Round the given number n to the nearest multiple of m.

// If n is exactly in the middle of 2 multiples of m, return n instead.

// Example
// For n = 20, m = 3, the output should be 21.

// For n = 19, m = 3, the output should be 18.

// For n = 50, m = 100, the output should be 50.

// Input/Output
// [input] integer n
// 1 ≤ n < 10^9.

// [input] integer m
// 3 ≤ m < 109.

// [output] an integer
// FUNDAMENTALS

// SOLUTION

function rounding(n, m) {
  let divFloor = Math.floor(n / m)
  let upper = (divFloor + 1) * m
  let lower = divFloor * m
  let fun = (n === (lower + m / 2)) ? n :
    (upper - n < n - lower) ? upper : lower
  return fun
}