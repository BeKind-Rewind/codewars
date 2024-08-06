// 26. Remove Duplicates from Sorted Array
// Easy
// Given an integer array nums sorted in non-decreasing order, 
// 1. remove the duplicates in-place such that each unique element appears only once. 
// 2. The relative order of the elements should be kept the same. 
// 3. Then return the number of unique elements in nums. (length)

// Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:

// Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. 
// The remaining elements of nums are not important as well as the size of nums.
// Return k.
// Custom Judge:
// The judge will test your solution with the following code:

// int[] nums = [...]; // Input array
// int[] expectedNums = [...]; // The expected answer with correct length

// int k = removeDuplicates(nums); // Calls your implementation

// assert k == expectedNums.length;
// for (int i = 0; i < k; i++) {
//     assert nums[i] == expectedNums[i];
// }
// If all assertions pass, then your solution will be accepted.

 

// Example 1:

// Input: nums = [1,1,2]
// Output: 2, nums = [1,2,_]
// Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).
// Example 2:

// Input: nums = [0,0,1,1,1,2,2,3,3,4]
// Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
// Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).
 

// Constraints:

// 1 <= nums.length <= 3 * 104
// -100 <= nums[i] <= 100
// nums is sorted in non-decreasing order.

// SOLUTION

var removeDuplicates = function(nums) {
  let count = 1; // Initialize the count of unique elements to 1
for (let i = 1; i < nums.length; i++) {
  if (nums[i] !== nums[count - 1]) {
    nums[count] = nums[i]; // **SEE 1 below
    count++;
  }
}
return count;
};

// 1) Why this line and the next line are so important:
// count's VALUE is offering the NEXT POSITION where we will need to REASSIGN the latest UNIQUE VALUE,
// in order to keep it in the original array
// *** nums[count] is BOTH the number of unique elements and the position of the next element by default,
// so we are reassigning the position of nums[count] to the value of the next unique number nums[i] whenever it passes the if statement check