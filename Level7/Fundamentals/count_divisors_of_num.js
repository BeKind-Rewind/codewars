// DESCRIPTION:
// Count the number of divisors of a positive integer n.

// Random tests go up to n = 500000.

// Examples (input --> output)
// 4 --> 3 // we have 3 divisors - 1, 2 and 4
// 5 --> 2 // we have 2 divisors - 1 and 5
// 12 --> 6 // we have 6 divisors - 1, 2, 3, 4, 6 and 12
// 30 --> 8 // we have 8 divisors - 1, 2, 3, 5, 6, 10, 15 and 30
// Note you should only return a number, the count of divisors. 
// The numbers between parentheses are shown only for you to see which numbers are counted in each case.

// NUMBER THEORYMATHEMATICSFUNDAMENTALS

// my initital code is too slow:

function getDivisorsCnt(n){
  // a number will always have itself and 1 as divisors; also 2 if even
let divisors = []
for (let i = 1; i <= n ; i++){
  if (n % i === 0){
    divisors.push(i)
  }
}
return divisors.length
}

// SOLUTION

function getDivisorsCnt(n){
  var num=0;
  if(n==1) return 1;
  if(n%Math.sqrt(n)==0) num++;
  for(var i=1;i<Math.sqrt(n);i++){
      if(n%i==0){
          num+=2;
      }
  }
  return num;
}

// In number theory we learn that any composite number n has at least one factor greater than 1 and at most sqrt(n).
// if(n==1) return 1; --> this code returns 1 if n is 1
// if(n%Math.sqrt(n)==0) num++; --> If n is a perfect square, we need to count the sqrt(n) as a single factor. (ex if n = 25, then 5 x 5 = 25, but we only count the 5 once).
// The for loop only iterates up until i = sqrt(n) because of the theory above. It counts 2 factors for every n%i==0 up until i=sqrt(n).