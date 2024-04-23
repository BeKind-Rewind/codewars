// DESCRIPTION:
// Based of the game counter-strike
// The bomb has been planted and you are the last CT (counter-terrorist) alive

// You need to defuse the bomb in time!

// Task:

// Given a matrix m and an integer time representing the seconds left before the bomb detonates, determine if it is possible to defuse the bomb in time. The time limit is inclusive.

// In the matrix m:

// "CT" represents the counter terrorist
// "B" represents the bomb
// "K" represents the kit
// "0" represents empty space
// The defuse kit may or may not be present in the matrix

// You can defuse the bomb in 2 ways:

// If you defuse the bomb without the defuse kit, it will cost 10 seconds
// If you defuse the bomb with the defuse kit, it will cost only 5 seconds
// each move the CT makes in any direction costs 1 second

// the CT can move diagonally, horizontally and vertically.

// Example 1

// time = 14

// m = 
// [
//   ["0", "0", "0", "0", "B"],
//   ["0", "0", "0", "0", "CT"],
//   ["0", "0", "0", "0", "0"],
//   ["0", "K", "0", "0", "0"],
// ]
// returns true

// Explanation:

// The CT moves upwards and gets to the bomb with 13 seconds left

// The CT defuses the bomb without the kit which costs 10 seconds

// The bomb is succesfully defused

// Alternative

// the CT can pickup the kit which costs 3 seconds

// Then get to the bomb which costs 3 seconds

// And defuse the bomb which costs 5 seconds

// The bomb is succesfully defused

// Example 2

// time = 10

// m = 
// [
//   ["CT", "0", "0", "0", "0", "0", "0"],
//   [ "0", "0", "0", "0", "0", "0", "0"],
//   [ "0", "0", "0", "0", "0", "0", "0"],
//   [ "0", "0", "0", "0", "0", "0", "0"],
//   [ "0", "0", "0", "0", "0", "0", "0"],
//   [ "0", "0", "0", "0", "0", "0", "0"],
//   [ "0", "0", "0", "0", "0", "0", "0"],
//   [ "0", "0", "0", "0", "0", "0", "B"]
// ]
// returns false

// Explanation:

// There is no kit present so the CT has to defuse without it

// the CT takes 7 seconds to get to the bomb but there is only 10 seconds remaining

// the bomb detonates!

// Good luck!

// Bingo bango bongo bish bash bosh.

// ARRAYSGAMES

// SOLUTION

function bombHasBeenPlanted(map, time) {
  const findCoordinates = (item) => {
    for (let i = 0; i < map.length; i++){
      if (map[i].includes(item)){
        let x = map[i].indexOf(item)
        let y = i
        return [x, y]
      }
    }   
  }
  
  const findDistance = (item1, item2) => {
    let xDis = Math.abs(item1[0] - item2[0])
    let yDis = Math.abs(item1[1] - item2[1])
    return Math.max(xDis, yDis)
  }
  
  let ct = findCoordinates("CT")
  let bomb = findCoordinates("B")
  let kit = findCoordinates("K") || time
  
  let noKit = findDistance(ct, bomb) + 10
  
  let withKit = findDistance(ct, kit) + findDistance(kit, bomb) + 5
  
  if (noKit <= time || withKit <= time) return true;
  return false;
}
