// Color Ghost
// Create a class Ghost

// Ghost objects are instantiated without any arguments.

// Ghost objects are given a random color attribute of "white" or "yellow" or "purple" or "red" when instantiated

// ghost = new Ghost();
// ghost.color //=> "white" or "yellow" or "purple" or "red"

// SOLUTION:

var Ghost = function () {
  let colors = ["white", "yellow", "purple", "red"];
  return this.color = colors[Math.floor(Math.random() * colors.length)]
}


// SOLUTION 2 - I don't yet understand how the integer coming from the second [] allows this.color to point to the correct(or any) color-item

var Ghost = function () {
  this.color = ["white", "yellow", "purple", "red"][Math.floor(Math.random() * 4)];
}