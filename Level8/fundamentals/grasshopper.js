// Combine strings function
// Create a function named combineNames that accepts two parameters (first and last name). 
// The function should return the full name.

// Example:

// combineNames('James', 'Stevens')
// returns:

// 'James Stevens'
// FUNDAMENTALS

// SOLUTION

function combineNames(first, last) {
  return `${first} ${last}`
}

// anotha solution

const combineNames = (...names) => names.join(' ');