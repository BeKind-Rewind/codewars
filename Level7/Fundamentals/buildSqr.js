// I will give you an integer. Give me back a shape that is as long and wide as the integer. 
// The integer will be a whole number between 1 and 50.

// Example
// n = 3, so I expect a 3x3 square back just like below as a string:

// +++
// +++
// +++
// FUNDAMENTALSASCII ART

// SOLUTION

function generateShape(integer){
  let shape = ""
  let rows = integer
  while (rows > 0) {
      for (let i = 0; i < integer ; i++){
      shape += "+"  
    }
    shape += "\n";
    rows--
  }
  return shape.slice(0, -1)
}