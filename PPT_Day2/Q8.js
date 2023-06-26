/*
Question 8
You are given an integer array nums and an integer k.

In one operation, you can choose any index i where 0 <= i < nums.length and change nums[i] to nums[i] + x where x is an integer from the range [-k, k]. You can apply this operation at most once for each index i.

The score of nums is the difference between the maximum and minimum elements in nums.

Return the minimum score of nums after applying the mentioned operation at most once for each index in it.

Example 1:
Input: nums = [1], k = 0
Output: 0

Explanation: The score is max(nums) - min(nums) = 1 - 1 = 0.
*/

function minimumScore(nums, k) {
    const n = nums.length;
  
    // Sort the array in ascending order
    nums.sort((a, b) => a - b);
  
    // Initialize the minimum and maximum values
    let minScore = nums[n - 1] - nums[0];
  
    // Iterate through the array to find the minimum score
    for (let i = 0; i < n - 1; i++) {
      const maxVal = Math.max(nums[i] + k, nums[n - 1] - k);
      const minVal = Math.min(nums[0] + k, nums[i + 1] - k);
      minScore = Math.min(minScore, maxVal - minVal);
    }
  
    return minScore;
  }
  
  // Test the function
  const nums = [1];
  const k = 0;
  const result = minimumScore(nums, k);
  console.log(result); // Output: 0
  