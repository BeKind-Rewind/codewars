// DESCRIPTION:
// Define a function that removes duplicates from an array of non negative numbers and returns it as a result.

// The order of the sequence has to stay the same.

// FUNDAMENTALSARRAYSLISTS

// My Solution

function distinct(a) {
  let newArr = [];
  a.forEach((item) => {
    if (!newArr.includes(item)) {
      newArr.push(item);
    }
  })
  return newArr;
}

// 3 solutions: 
// 1) Use Set
// 2) Use indexOf() and filter() methods
// 3) Using the includes() and forEach() methods