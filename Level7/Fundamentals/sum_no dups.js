// Please write a function that sums a list, but ignores any duplicate items in the list.

// For instance, for the list [3, 4, 3, 6] , the function should return 10 and for the list [1, 10, 3, 10, 10] , the function should return 4.

// ALGORITHMSFUNDAMENTALS

// SOLUTION

let sum = 0;

for (let i = 0; i < numList.length; i++) {
  let valid = true;
  for (let j = i + 1; j < numList.length; j++) {
    if (numList[i] === numList[j]) {
      numList[j] = 0;
      valid = false;
    }
  }
  if (valid === false) {
    numList[i] = 0;
  }
  sum += numList[i];
}
return sum;