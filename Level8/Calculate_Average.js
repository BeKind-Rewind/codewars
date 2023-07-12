// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

// 

function findAverage(array) {
  let sum = 0;
  if (array.length === 0) {
    return +0;
  }
  else {
    for (i = 0; i < array.length; i++) {
      sum += array[i]
    }
    let average = sum / array.length;
    return average
  }

}