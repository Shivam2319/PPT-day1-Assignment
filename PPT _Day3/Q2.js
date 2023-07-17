/* Given an array nums of n integers, return an array of all the unique quadruplets
[nums[a], nums[b], nums[c], nums[d]] such that:
           ● 0 <= a, b, c, d < n
           ● a, b, c, and d are distinct.
           ● nums[a] + nums[b] + nums[c] + nums[d] == target

You may return the answer in any order.

Example 1:
Input: nums = [1,0,-1,0,-2,2], target = 0
Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]] */


function fourSum(nums, target) {
    const results = [];
    const sortedNums = nums.sort((a, b) => a - b);
    const n = sortedNums.length;
  
    for (let a = 0; a < n - 3; a++) {
      if (a > 0 && sortedNums[a] === sortedNums[a - 1]) continue;
  
      for (let b = a + 1; b < n - 2; b++) {
        if (b > a + 1 && sortedNums[b] === sortedNums[b - 1]) continue;
  
        let c = b + 1;
        let d = n - 1;
  
        while (c < d) {
          const sum = sortedNums[a] + sortedNums[b] + sortedNums[c] + sortedNums[d];
  
          if (sum === target) {
            results.push([sortedNums[a], sortedNums[b], sortedNums[c], sortedNums[d]]);
            c++;
            d--;
  
            while (c < d && sortedNums[c] === sortedNums[c - 1]) c++;
            while (c < d && sortedNums[d] === sortedNums[d + 1]) d--;
          } else if (sum < target) {
            c++;
          } else {
            d--;
          }
        }
      }
    }
  
    return results;
  }
  
  // Example usage
  const nums = [1, 0, -1, 0, -2, 2];
  const target = 0;
  const result = fourSum(nums, target);
  console.log(result);
  