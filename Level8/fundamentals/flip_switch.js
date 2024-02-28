// Task
// Create a function that always returns True/true for every item in a given list.
// However, if an element is the word 'flick', switch to always returning the opposite boolean value.

// Examples
// ['codewars', 'flick', 'code', 'wars'] ➞ [True, False, False, False]

// ['flick', 'chocolate', 'adventure', 'sunshine'] ➞ [False, False, False, False]

// ['bicycle', 'jarmony', 'flick', 'sheep', 'flick'] ➞ [True, True, False, False, True]
// Notes
// "flick" will always be given in lowercase.
// A list may contain multiple flicks.
// Switch the boolean value on the same element as the flick itself.
// FUNDAMENTALSLISTS

// SOLUTION

function flickSwitch(arr) {
  let newArr = [];
  if (arr[0] === 'flick') {
    newArr.push(false);
  }
  else if (!arr[0]) {
    return []
  }
  else if (arr[0]) {
    newArr.push(true);
  }
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === 'flick' && newArr[i - 1] === true) {
      newArr.push(false);
    }
    else if (arr[i] === 'flick' && newArr[i - 1] === false) {
      newArr.push(true);
    }
    else if (newArr[i - 1] === false) {
      newArr.push(false);
    }
    else if (arr) {
      newArr.push(true);
    }
  }
  return newArr;
}



// elegant solution 

function flickSwitch(arr) {
  let returning = true;
  return arr.map((v) => {
    return (v === "flick") ? returning = !returning : returning;
  })
}