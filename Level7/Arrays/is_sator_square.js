// A Discovery
// One fine day while tenaciously turning the soil of his fields, Farmer Arepo found a square stone tablet with letters carved into it... he knew such artifacts may 'show a message in four directions', so he wisely kept it. As he continued to toil in his work with his favourite rotary plough, he found more such tablets, but with so many crops to sow he had no time to decipher them all.

// Your Task
// Please help Farmer Arepo by inspecting each tablet to see if it forms a valid Sator Square!

// sator square
// The Square
// is a two-dimentional palindrome, made from words of equal length that can be read in these four ways:

//     1)    left-to-right    (across)
//     2)    top-to-bottom    (down)
//     3)    bottom-to-top    (up)
//     4)    right-to-left    (reverse)
// An Example
// Considering this square:

//     B A T S
//     A B U T
//     T U B A
//     S T A B
// Here are the four ways a word (in this case "TUBA") can be read:

//                          down
//                           ↓
//            B A T S    B A T S    B A T S    B A T S
//            A B U T    A B U T    A B U T    A B U T ← reverse
//   across → T U B A    T U B A    T U B A    T U B A
//            S T A B    S T A B    S T A B    S T A B
//                                    ↑
//                                    up
// IMPORTANT:

// In a true Sator Square, ALL of its words can be read in ALL four of these ways.
// If there is any deviation, it would be false to consider it a Sator Square.
// Some Details
// tablet (square) dimensions range from 2x2 to 33x33 inclusive
// all characters used will be upper-case alphabet letters
// there is no need to validate any input
// Input
// an N x N (square) two-dimentional matrix of uppercase letters
// Output
// boolean true or false whether or not the tablet is a Sator Square
// Enjoy!
// You may consider one of the following kata to solve next:

// Playing With Toy Blocks ~ Can you build a 4x4 square?
// Four Letter Words ~ Mutations
// Setting Places for the Dead
// Crossword Puzzle! (2x2)
// Interlocking Binary Pairs
// ARRAYSDATA STRUCTURESALGORITHMS


// solution

const isSatorSquare = tablet => {
  let words = new Map() // creates a new array 
  
  // left-to-right
  for (let i = 0; i < tablet.length; i++) {
    let word = tablet[i].join('')
    words.set(word, (words.get(word) || 0) + 1) // adds the word to the array of words
  }
  
  // top-to-bottom, for loop to reference the same column in the second for loop
  for (let j = 0; j < tablet.length; j++) { 
    let word = ''
    
    for (let j_x = 0; j_x < tablet.length; j_x++) {
      word += tablet[j_x][j]
    }
    
    words.set(word, (words.get(word) || 0) + 1)
  }
  
  // bottom-to-top
  for (let j = 0; j < tablet.length; j++) {
    let word = ''
    
    for (let j_y = tablet.length - 1; j_y >= 0 ; j_y--) {
      word += tablet[j][j_y]
    }
    
    words.set(word, (words.get(word) || 0) + 1)
  }
  
  // right-to-left
  for (let l = 0; l < tablet.length; l++) {
    let word = tablet[l].reverse().join('')
    words.set(word, (words.get(word) || 0) + 1)
  }
  
  for (let word of words) {
    if (word[1] % 4 !== 0) { 
      return false
    }
  }
  
  return true
}