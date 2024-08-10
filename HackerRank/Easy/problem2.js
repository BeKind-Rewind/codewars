// // Given an array of integers find the sum of its elements

// SOLUTION

function arrSum(arr){
  let sum = 0
  for (let i = 0 ; i < arr.length ; i++){
    sum += arr[i]
  }
  return sum
}