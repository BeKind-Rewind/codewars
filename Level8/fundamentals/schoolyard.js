// Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals,
//   saying each of the following phrases each time a petal was torn:

// "I love you"
// "a little"
// "a lot"
// "passionately"
// "madly"
// "not at all"
// If there are more than 6 petals, you start over with "I love you" for 7 petals, "a little" for 8 petals 
// and so on.

// When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.

// Your goal in this kata is to determine which phrase the girls would say at the last petal for a flower 
// of a given number of petals.The number of petals is always greater than 0.

// ARRAYSFUNDAMENTALS

// SOLUTION

function howMuchILoveYou(nbPetals) {
  let phrases = ["I love you", "a little", "a lot", "passionately", "madly", "not at all"];
  let lastPedal = nbPetals < 6 ? phrases[nbPetals - 1] :
    nbPetals % 6 === 0 ? phrases[5] :
      phrases[nbPetals % 6 - 1]
  return lastPedal;
}