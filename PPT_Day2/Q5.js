/*
Given an integer array nums, find three numbers whose product is maximum and return the maximum product.

Example 1:
Input: nums = [1,2,3]
Output: 6
*/

function maximumProduct(nums) {
    // Sort the array in ascending order
    nums.sort((a, b) => a - b);
  
    const n = nums.length;
  
    // Calculate the maximum product of three numbers
    const product1 = nums[n - 1] * nums[n - 2] * nums[n - 3];
    // In case there are negative numbers in the array, consider the two smallest numbers and the largest number
    const product2 = nums[0] * nums[1] * nums[n - 1];
  
    return Math.max(product1, product2);
  }
  
  // Test the function
  const nums = [1, 2, 3];
  const result = maximumProduct(nums);
  console.log(result); // Output: 6
  