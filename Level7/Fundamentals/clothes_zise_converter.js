// Description
// You have clothes international size as text (xs, s, xxl).
// Your goal is to return European number size as an number from that size

// Notice that there is arbitrary amount of modifiers (x), excluding m size and input can be any string

// Linearity
// Base size for medium (m) is 38
// (then, small (s), is 36 and large (l) is 40)

// As you can see scale is linear, modifier x continues that by adding or subtracting 2 from resulting size

// Invalid cases
// Function should handle wrong/invalid sizes

// Valid input has any base size (s/m/l) and any amount of modifiers (x) before base size (like xxl).
// Notice that you cannot apply modifier for m size, consider that case as invalid!
// Anything else is disallowed and should be considered as invalid (None for Python, 0, false for Go).

// Invalid examples: xxx, sss, xm, other string

// Valid Examples
// xs: 34
// s: 36
// m: 38
// l: 40
// xl: 42

// STRINGSFUNDAMENTALS

// SOLUTION

function sizeToNumber(size) {
  let x = 0
  let base = ["s", "m", "l"]
  for (let i = 0 ; i < size.length ; i++){
    if (size[i] === "x"){
      x++
    }
  }
  if (x === size.length) {
    return null
  }
  if (size.includes("m") && x > 0){
    return null
  }
  if (x>0 && size.length -1 != x){
    return null
  }
  if (x === 0 && size.length > 1){
    return null
  }
  
  
  const clothes = {
      "xxxxxs":26,
      "xxxxs":28,
      "xxxs":30,
      "xxs":32,
      "xs":34,
      "s":36,
      "m":38,
      "l":40,
      "xl":42,
      "xxl":44,
      "xxxl":46,
      "xxxxl":48,
      "xxxxxl":50
  }
  
  return size === "" ? null : clothes[size];
}

// refactor

function sizeToNumber(size) {
  // find if & how many x 
  let x = 0
  for (let i = 0 ; i < size.length ; i++){
    if (size[i] === "x"){
      x++
    }
  }
  // establish null cases
  if (
    (x === size.length) || // you can't have just x nor an empty string
    (size.includes("m") && x > 0) || // if you have m, can't have any x
    (x>0 && size.length -1 != x) || // if there is any amount of x, the total length should be only difference of 1
    (x === 0 && size.length > 1)) { // if no x, size length cannot be greater than 1
    return null
  }
  // if the input is valid, use key:value pairs to get the converted value
  const clothes = {
      "xxxs":30,
      "xxs":32,
      "xs":34,
      "s":36,
      "m":38,
      "l":40,
      "xl":42,
      "xxl":44,
      "xxxl":46
  }
  
  return clothes[size];
}

