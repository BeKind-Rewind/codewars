// You are given two sorted arrays where both only contain integers. 
// Your task is to find a way to merge them into a single one, sorted in asc order. 
// Complete the function mergeArrays(arr1, arr2), where arr1 and arr2 
// are the original sorted arrays.

// You don't need to worry about validation, since arr1 and arr2 must 
// be arrays with 0 or more Integers. If both arr1 and arr2 are empty, 
// then just return an empty array.

// Note: arr1 and arr2 may be sorted in different orders. 
// Also arr1 and arr2 may have same integers. 
// Remove duplicats in the returned result.

// Examples (input -> output)
// * [1, 2, 3, 4, 5], [6, 7, 8, 9, 10] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// * [1, 3, 5, 7, 9], [10, 8, 6, 4, 2] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// * [1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12] -> [1, 2, 3, 4, 5, 7, 9, 10, 11, 12]
// Happy coding!

// Fundamentals Arrays

// MY SOLUTION

// Params - what could be given
// *only integers, no funny/special chars, will always be an array, always sorted but either asc or desc, could be empty array
// 
// Return - what should it return/look like
// * return array, merge them into a single one, sorted in asc order, 
// 
// Explain the process
// *brute: 
// determine if asc or desc.
// loop through each array in asc fashion
// check if number is in the new array
// add if not
//
// *better:
// hash map, loop and add to hash:true
// loop and check if in the hash
// add to hash and map if so 
// 
// PseudoCode the process

