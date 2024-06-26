// You are given an integer array height of length n. There are n vertical lines drawn 
// such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

// Find two lines that together with the x-axis form a container, such that the 
// container contains the most water.

// Return the maximum amount of water a container can store.

// Notice that you may not slant the container.

 

// Example 1:


// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49
// Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. 
// In this case, the max area of water (blue section) the container can contain is 49.
// Example 2:

// Input: height = [1,1]
// Output: 1
 

// Constraints:

// n == height.length
// 2 <= n <= 105
// 0 <= height[i] <= 104

// Seen this question in a real interview before?
// 1/5
// Yes
// No
// Accepted
// 3M
// Submissions
// 5.5M
// Acceptance Rate
// 55.5%
// Topics
// Companies
// Hint 1
// If you simulate the problem, it will be O(n^2) which is not efficient.
// Hint 2
// Try to use two-pointers. Set one pointer to the left and one to the right of the array. 
// Always move the pointer that points to the lower line.
// Hint 3
// How can you calculate the amount of water at each step?

// SOLUTION

var maxArea = function(height) {
  let maxArea = 0
  let left = 0
  let right = height.length -1
  while (left < right){
      maxArea = Math.max(maxArea, (right - left) * Math.min(height[left], height[right]))
      if (height[left] < height[right]){
          left += 1;
      } else {
          right -= 1
      }
  }
  return maxArea
};

// TECHNICALLY solves the promblem but is toooooooo slow!

var maxArea = function(height) {
  let max = 0
  for (let i = 0 ; i < height.length-1; i++){
      for(let j = height.length; j > 0; j--){
          let h = height[i] < height[j] ? height[i] : height[j];
          let area = (j - i)*h
          if (area > max){
              max = area;
          }
      }
  }

  return max
};
