/* You are given an inclusive range [lower, upper] and a sorted unique integer array
nums, where all elements are within the inclusive range.

A number x is considered missing if x is in the range [lower, upper] and x is not in
nums.

Return the shortest sorted list of ranges that exactly covers all the missing
numbers. That is, no element of nums is included in any of the ranges, and each
missing number is covered by one of the ranges.

Example 1:
Input: nums = [0,1,3,50,75], lower = 0, upper = 99
Output: [[2,2],[4,49],[51,74],[76,99]]

Explanation: The ranges are:
[2,2]
[4,49]
[51,74]
[76,99] */

function findMissingRanges(nums, lower, upper) {
    const result = [];
    let start = lower;
  
    for (let num of nums) {
      if (num > start) {
        result.push([start, num - 1]);
        start = num + 1;
      } else if (num === start) {
        start++;
      }
    }
  
    if (start <= upper) {
      result.push([start, upper]);
    }
  
    return result;
  }
  
  const nums = [0, 1, 3, 50, 75];
  const lower = 0;
  const upper = 99;
  console.log(findMissingRanges(nums, lower, upper));
  