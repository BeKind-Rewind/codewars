// Our football team has finished the championship.

// Our team's match results are recorded in a collection of strings. Each match is represented by a string in the format "x:y", where x is our team's score and y is our opponents score.

// For example: ["3:1", "2:2", "0:1", ...]

// Points are awarded for each match as follows:

// if x > y: 3 points (win)
// if x < y: 0 points (loss)
// if x = y: 1 point (tie)
// We need to write a function that takes this collection and returns the number of points our team (x) got in the championship by the rules given above.

// Notes:

// our team always plays 10 matches in the championship
// 0 <= x <= 4
// 0 <= y <= 4
// FUNDAMENTALSARRAYSSTRINGS

// MY CODE

function points(games) {
  // initialize a variable bucket to sum as we go
  let championshipPoints = 0;
  // for loop to iterate through all the games
  for (let i = 0; i < games.length; i++) {
    // initialize a place to split the string into its charachters to compare scores and find win, lode or draw
    let x = games[i].split(';')
    // if conditional to test against, x[0] is "our team" and x[1] is the competition
    if (x[0] > x[1]) {
      // we won, add 3 points to championshipPoints
      championshipPoints += 3
    } else if (x[0] == x[1]) {
      // we tied, add 1 point to championshiopPoints
      championshipPoints += 1;
    } else
      // we lost and no points are added
      championshipPoints = championshipPoints;
  }
  return championshipPoints;
}

// OTHER, common to use reduce()

const points = games => games.reduce((output, current) => {
  return output += current[0] > current[2] ? 3 : current[0] === current[2] ? 1 : 0;
}, 0)
