// 1, 246, 2, 123, 3, 82, 6, 41 are the divisors of number 246. Squaring these divisors we
// get: 1, 60516, 4, 15129, 9, 6724, 36, 1681. The sum of these squares is 84100 which is 290 * 290.

// Task
// Find all integers between m and n (m and n integers with 1 <= m <= n) such that the sum of 
// their squared divisors is itself a square.

// We will return an array of subarrays or of tuples (in C an array of Pair) or a string. The subarrays 
// (or tuples or Pairs) will have two elements: first the number the squared divisors of which is a square 
// and then the sum of the squared divisors.

// Example:
// list_squared(1, 250) --> [[1, 1], [42, 2500], [246, 84100]]
// list_squared(42, 250) --> [[42, 2500], [246, 84100]]
// The form of the examples may change according to the language, see "Sample Tests".

// Note
// In Fortran - as in any other language - the returned string is not permitted to contain any redundant 
//trailing whitespace: you can use dynamically allocated character strings.

// FUNDAMENTALSALGORITHMS

// SOLUTION

function listSquared(m, n) {
  var matches = [];

  for (var i = m; i <= n; ++i) {
    var sum = getDivisors(i).reduce((sum, n) => sum + n * n, 0);
    var ok = Number.isInteger(Math.sqrt(sum));

    if (ok) {
      matches.push([i, sum]);
    }
  }

  return matches;
}

function getDivisors(n) {
  var divisors = [];

  for (var i = 1; i <= n / 2; ++i) {
    if (n % i) {
      continue;
    }

    divisors.push(i);
  }

  return divisors.concat([n]);
}


// lettuce understand

function listSquared(m, n) {
  let answer = [];
  for (let i = m; i <= n; i++) {                              //loop through each digit m --> n
    let squaredArray = [];
    for (let j = 1; j <= i; j++) {
      if (i % j === 0) {                                 //find each digit's divisors
        squaredArray.push(Math.pow(j, 2));               //square them and pop them in an array
      }
    }

    let squaredSum = squaredArray.reduce((a, b) => a + b);  //reduce that array

    if (Number.isInteger(Math.sqrt(squaredSum))) {        //check if the square root of that reduction is an integer
      answer.push(Array.of(i, squaredSum));              //push it along with the original number as an Array
    }
  }
  return answer;                                          //return it like you bought it from Bed, Bath, and Beyond
}