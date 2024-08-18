// Description:
// Your task is to find the nearest square number, nearest_sq(n) or nearestSq(n), of a positive integer n.

// For example, if n = 111, then nearest\_sq(n) (nearestSq(n)) equals 121, since 111 is closer to 121, the square of 11, than 100, the square of 10.

// If the n is already the perfect square (e.g. n = 144, n = 81, etc.), you need to just return n.

// Good luck :)

// Check my other katas:

// Alphabetically ordered

// Case-sensitive!

// Not prime numbers

// Find your caterer

// FundamentalsMathematics

// SOLUTION

function nearestSq(n){
  if (Math.floor(n**.5) === n**.5) return n;
  
  let floor = Math.floor(n**.5)
  let top = floor + 1
  let diffBottom = n - floor**2
  let diffTop = top**2 - n
  
  if (diffBottom > diffTop){
    return top**2
  } else {
    return floor**2
  }
}

// refactor

function nearestSq(n){
  let floor = Math.floor(n**.5)
  let top = floor + 1
  
  if (floor === n**.5) return n;
  
 return (n - floor**2) > (top**2 - n) ? top**2 : floor**2;
 
}


// top solution

const nearestSq = n => Math.pow(Math.round(Math.sqrt(n)), 2);
// arrow function has implicit return
// Math.pow( x, 2) will square the inner result
// Math.round() will round to the nearest integer
// Math.sqrt(n) will sqrt ^^^ then round to nearest integer ^^^ then square inner result ^^^ then return on itsown 