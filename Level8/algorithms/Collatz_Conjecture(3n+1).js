// DESCRIPTION:
// The Collatz conjecture(also known as 3n + 1 conjecture) is a conjecture that applying the following algorithm to any number we will always eventually reach one:

// [This is writen in pseudocode]
// if (number is even) number = number / 2
// if (number is odd) number = 3 * number + 1
// #Task

// Your task is to make a function hotpo that takes a positive n as input and returns the number of times you need to perform this algorithm to get n = 1.

// #Examples

// hotpo(1) returns 0
//   (1 is already 1)

// hotpo(5) returns 5
// 5 -> 16 -> 8 -> 4 -> 2 -> 1

// hotpo(6) returns 8
// 6 -> 3 -> 10 -> 5 -> 16 -> 8 -> 4 -> 2 -> 1

// hotpo(23) returns 15
// 23 -> 70 -> 35 -> 106 -> 53 -> 160 -> 80 -> 40 -> 20 -> 10 -> 5 -> 16 -> 8 -> 4 -> 2 -> 1
// #References

// Collatz conjecture wikipedia page: https://en.wikipedia.org/wiki/Collatz_conjecture
// FUNDAMENTALSALGORITHMSMATHEMATICS

// MY CODE:

let hotpo = function (n) {
  let count = 0
  if (n < 2) {
    return 0
  }
  while (n > 1) {
    if (n % 2) {
      n = n * 3 + 1
    } else {
      n /= 2
    }
    count++
  }
  return count
}

// ANOTHER

var hotpo1 = function (n, acc = 0) {
  if (n <= 1) {
    return acc;
  } else {
    return hotpo1(n % 2 == 0 ? n / 2 : 3 * n + 1, acc + 1);
  }
}

// DITTO

var hotpo2 = function (n) {
  var rs = 0;
  while (n > 1) {
    rs++;
    n = n % 2 ? n * 3 + 1 : n / 2;
  }
  return rs;
}