// Given two strings comprised of + and -, return a new string which shows how the two strings interact in the following way:

// When positives and positives interact, they remain positive.
// When negatives and negatives interact, they remain negative.
// But when negatives and positives interact, they become neutral, and are shown as the number 0.
// Worked Example
// ("+-+", "+--") ➞ "+-0"
// # Compare the first characters of each string, then the next in turn.
// # "+" against a "+" returns another "+".
// # "-" against a "-" returns another "-".
// # "+" against a "-" returns "0".
// # Return the string of characters.
// Examples
// ("--++--", "++--++") ➞ "000000"

// ("-+-+-+", "-+-+-+") ➞ "-+-+-+"

// ("-++-", "-+-+") ➞ "-+00"
// Notes
// The two strings will be the same length.

// ALGORITHMSSTRINGS

// SOLUTION

function neutralise(s1, s2) {
  let newString = "";
  for (let i = 0; i < s1.length; i++) {
    if (s1[i] == s2[i]) {
      newString += s1[i];
    }
    else if (s1[i] == "-" || s2[i] == "-") {
      newString += "0";
    }
  }
  return newString;
}

// More clever solutions:

function neutralise(s1, s2) {
  let res = "";
  for (let i = 0; i < s1.length; i++) {
    res += s1[i] !== s2[i] ? "0" : s1[i];
  }
  return res;
}

// anotha

const neutralise = (a, b) => a.split('').map((el, i) => el === b[i] ? el : 0).join('')