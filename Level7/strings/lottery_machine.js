// DESCRIPTION:
// Your task is to write an update for a lottery machine. Its current version produces a sequence of random letters and integers (passed as a string to the function). Your code must filter out all letters and return unique integers as a string, in their order of first appearance. If there are no integers in the string return "One more run!"

// Examples
// "hPrBKWDH8yc6Lt5NQZWQ"  -->  "865"
// "ynMAisVpHEqpqHBqTrwH"  -->  "One more run!"
// "555"                   -->  "5"
// STRINGSFUNDAMENTALS

// SOLUTION

function lottery(str){
  let update =""
  for (let i = 0; i < str.length ; i++){
    if(str[i] === '0' ||
       str[i] === '1' ||
       str[i] === '2' ||
       str[i] === '3' ||
       str[i] === '4' ||
       str[i] === '5' ||
       str[i] === '6' ||
       str[i] === '7' ||
       str[i] === '8' ||
       str[i] === '9'){
      if (!update.includes(str[i])){
        update += str[i]
        }
    } 
  }
 return update ? update : "One more run!";
}

