// Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.

// Return as a number.

// FUNDAMENTALSSTRINGSARRAYS

// solution

function divCon(x){
  let count = 0;
  for( let i = 0 ; i < x.length; i++){
    if (typeof (x[i]) == 'string') {
      count -= Number(x[i]);
    } else {
      count += x[i];
    }
  }
  return count;
}

