// DESCRIPTION:
// A binary gap within a positive number num is any sequence of consecutive zeros that is surrounded by ones at both ends in the binary representation of num.
// For example:
// 9 has binary representation 1001 and contains a binary gap of length 2.
// 529 has binary representation 1000010001 and contains two binary gaps: one of length 4 and one of length 3.
// 20 has binary representation 10100 and contains one binary gap of length 1.
// 15 has binary representation 1111 and has 0 binary gaps.
// Write function gap(num) that,  given a positive num,  returns the length of its longest binary gap.
// The function should return 0 if num doesn't contain a binary gap.

// REGULAR EXPRESSIONSSTRINGSFUNDAMENTALS

// SOLUTION

function gap(num) {
  
  // #1 - convert num to binary
  let binary = num.toString(2)
  
  // #2 - Find indexes of any ones
  // declare array to hold indexes of 1s; 
  let oneIndex = ['0'] // position [0] will always be 1
  for (let i = 1 ; i < binary.length ; i ++){
      if (binary[i]=='1') {
          oneIndex.push(i);
      } 
  }

  // #3 - Compare indexes to find gaps
  let gapArr = [] // length of array is number of gaps
  for (let j = 0; j < oneIndex.length ; j++){
    if (oneIndex[j+1] - oneIndex[j] > 1){
      gapArr.push(oneIndex[j+1] - oneIndex[j] - 1) // finds size of gap
    }
  }

  // #4 - if no gaps are found return 0, else return the largest gap value from gapArr
  return gapArr.length < 1 ? 0 : Math.max(...gapArr)
}