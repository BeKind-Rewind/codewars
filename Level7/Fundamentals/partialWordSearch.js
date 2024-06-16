// DESCRIPTION:
// Write a method that will search an array of strings for all strings that contain another string, 
// ignoring capitalization. Then return an array of the found strings.

// The method takes two parameters, the query string and the array of strings to search, and 
// returns an array.

// If the string isn't contained in any of the strings in the array, the method returns an array 
// containing a single string: "Empty" (or Nothing in Haskell, or "None" in Python and C)

// Examples
// If the string to search for is "me", and the array to search is ["home", "milk", "Mercury", "fish"], 
// the method should return ["home", "Mercury"].

// ARRAYSSTRINGSFUNDAMENTALS

// SOLUTION

function wordSearch(query, seq){
  let foundStr = [];
  let checker = query.toLowerCase()
  // for loop through seq array
  for (let i = 0; i < seq.length ; i++){
    let currentWord = seq[i].toLowerCase()
    // toLowerCase() : if includes push to foundStr
    if (currentWord.length >= checker.length){
      if ( currentWord.includes(checker)){
        foundStr.push(seq[i])
      }
    }
  }
  // if foundStr is not empty return foundString[]
  // if no match (if foundStr is empty) return "Empty" 
  // remember to use .length to test for empty array!
  if (foundStr.length < 1 ){
    foundStr.push("Empty")
  }
  return foundStr;