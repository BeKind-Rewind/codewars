// Write a function, isItLetter or is_it_letter, which tells us if a given character is an, uppercase or lowercase, letter.

// FUNDAMENTALS

// SOLUTION

function isItLetter(character) {
  return 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').includes(character)
}
