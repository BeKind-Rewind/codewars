// Finding your seat on a plane is never fun, particularly for a long haul flight...
// You arrive, realise again just how little leg room you get, and sort of climb into 
// the seat covered in a pile of your own stuff.

// To help confuse matters (although they claim in an effort to do the opposite) many 
// airlines omit the letters 'I' and 'J' from their seat naming system.

// the naming system consists of a number (in this case between 1-60) that denotes the 
// section of the plane where the seat is (1-20 = front, 21-40 = middle, 40+ = back). 
// This number is followed by a letter, A-K with the exclusions mentioned above.

// Letters A-C denote seats on the left cluster, D-F the middle and G-K the right.

// Given a seat number, your task is to return the seat location in the following format:

// '2B' would return 'Front-Left'.

// If the number is over 60, or the letter is not valid, return 'No Seat!!'.

// FUNDAMENTALSSTRINGSARRAYS

// SOLUTION

function planeSeat(a) {
  // split the string into an array
  let arr = a.split('')
  // validation check for isNumber as well as how many digits
  let num = 0
  // validation that there is exactly one char
  let char = 0
  for (let i = 0; i < arr.length; i++) {
    if (!isNaN(arr[i])) {
      num += 1
    } else {
      char += 1
    }
  }
  // finding the total numerical value from the string's digits 
  let seatNumber = num === 1 ? arr[0] :
    num === 2 ? ((+arr[0] * 10) + +arr[1]) : false
  // validation that there is exactly one char
  let seatLetter = char === 1 ? arr[num] : false
  // validation that both number and letter values are within their scopes, representing a real seat location
  if (seatNumber === false || seatLetter === false) return `No Seat!!`
  if (seatNumber > 60 || ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'K'].includes(arr[num]) === false) return `No Seat!!`
  // determine which section of the plane
  let area = seatNumber < 21 ? 'Front-' :
    seatNumber < 41 ? 'Middle-' : 'Back-'
  // determine in which column the seat resides
  let seat = ['A', 'B', 'C'].includes(arr[num]) ? 'Left' :
    ['D', 'E', 'F'].includes(arr[num]) ? 'Middle' : 'Right'

  return `${area}${seat}`
}

// refactor

function planeSeat(a) {

  let num = 0
  for (let i = 0; i < a.length; i++) {
    if (!isNaN(a[i])) num += 1
  }

  let seatNum = num === 1 ? a[0] : ((+a[0] * 10) + +a[1])

  if (a.length > 3 || num > 2 || seatNum > 60 || !['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'K'].includes(a[num])) return `No Seat!!`

  return (seatNum < 21 ? 'Front-' :
    seatNum < 41 ? 'Middle-' : 'Back-') +
    (['A', 'B', 'C'].includes(a[num]) ? 'Left' :
      ['D', 'E', 'F'].includes(a[num]) ? 'Middle' : 'Right')
}