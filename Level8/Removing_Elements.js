// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

// Example:
// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

// None of the arrays will be empty, so you don't have to worry about that!

// LISTSARRAYSFUNDAMENTALS

// MY CODE

function removeEveryOther(arr) {
  let keepers = [arr[0]];
  for (let i = 1; i < arr.length; i++) {

    if (i % 2 === 0) {
      keepers.push(arr[i])
    }
  }
  return keepers;
}