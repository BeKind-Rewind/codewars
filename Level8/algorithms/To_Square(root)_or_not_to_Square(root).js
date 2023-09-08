// DESCRIPTION:
// Write a method, that will get an integer array as parameter and will process every number from this array.

// Return a new array with processing every number of the input-array like this:

// If the number has an integer square root, take this, otherwise square the number.

// Example
// [4,3,9,7,2,1] -> [2,9,3,49,4,1]
// Notes
// The input array will always contain only positive numbers, and will never be empty or null.

// MATHEMATICSARRAYSALGORITHMS

// MY CODE:

function squareOrSquareRoot(array) {
  let newArr = [];
  for (let i = 0; i < array.length; i++) {
    let sqrt = Math.sqrt(array[i]);
    if (Number.isInteger(sqrt)) {
      newArr.push(sqrt);
    } else {
      newArr.push(array[i] * array[i])
    }
  }
  return newArr;
}

// ALTERNATIVES

function squareOrSquareRoot(array) {
  return array.map(x => {
    const r = Math.sqrt(x);
    return (r % 1 == 0) ? r : (x * x);
  });
}

// Single Line

const squareOrSquareRoot = array => array.map(a => Math.sqrt(a) % 1 == 0 ? Math.sqrt(a) : (a * a));