// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

// [10, 343445353, 3453445, 3453545353453] should return 3453455.

// ARRAYSFUNDAMENTALS

// MY SOLUTION _ Linear time complexity, O(n)

function sumTwoSmallestNumbers(numbers) {  
  var min = Number.MAX_SAFE_INTEGER;
  var secondMin = Number.MAX_SAFE_INTEGER;
  
  var n;
  for (i = 0; i < numbers.length; i++) {
    n = numbers[i];
  	if(n < min) {
    	secondMin = min;
      min = n;
    } else if( n < secondMin ) {
    	secondMin = n;
    }
  }
  
  return min + secondMin;
}

// much slower: .sort() method has a time complexity of O(n log(n))

function sumTwoSmallestNumbers(numbers){  
  numbers = numbers.sort(function(a, b){return a - b; });
  return numbers[0] + numbers[1];
};
