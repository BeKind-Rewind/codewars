// DESCRIPTION:
// Sort an array according to the indices in another array.
// It is guaranteed that the two arrays have the same size, and that the sorting array has all the required indices.

//     sort(['x', 'y', 'z'], [1, 2, 0]) => ['z', 'x', 'y']
    
//     sort(['z', 'x', 'y'], [0, 2, 1]) => ['z', 'y', 'x']
// ARRAYSFUNDAMENTALSSORTING

// SOLUTION

function sort(initialArray, sortingArray) {
  let sortedArr = []
  let refIndex = 0
  for (let i = 0 ; i < initialArray.length ; i++){
    refIndex = sortingArray.indexOf(i)
    sortedArr.push(initialArray[refIndex])
  }
  return sortedArr
}