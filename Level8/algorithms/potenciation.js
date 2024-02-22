// The function takes in 2 inputs x and y, and should return x to the power of y

// Simple, right? But you're NOT allowed to use Math.pow();

// Obs: x and y will be naturals, so DON'T take fractions into consideration;

// Note : zero to the power of zero equals one in this kata

// Great coding <3

// MATHEMATICSALGORITHMSFUNDAMENTALS

// SOLUTION

function power(x, y) {
  // if (x === 0 && y === 0 ) return 0
  return x ** y
}

// Supposedly ** isn't in the "spirit" of the kata so here is an alternative solution

const power = (x, y) => {
  let arr = [];
  for (let i = 0; i < y; i++) {
    arr.push(x);
  }
  return (arr.length > 0 ? arr.reduce((prev, cur) => prev * cur) : 1)
}


