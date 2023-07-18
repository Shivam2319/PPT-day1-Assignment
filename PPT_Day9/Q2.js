/*Given an array of integer nums sorted in non-decreasing order, find the starting and ending position of a given target value.
If the target is not found in the array, return [-1, -1].
You must write an algorithm with O(log n) runtime complexity
Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4] */
function searchRange(nums, target) {
    const leftIndex = findIndex(nums, target, true);
    const rightIndex = findIndex(nums, target, false);
  
    return [leftIndex, rightIndex];
  }
  
  function findIndex(nums, target, isLeft) {
    let left = 0;
    let right = nums.length - 1;
    let index = -1;
  
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
  
      if (nums[mid] === target) {
        index = mid;
  
        if (isLeft) {
          right = mid - 1;
        } else {
          left = mid + 1;
        }
      } else if (nums[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  
    return index;
  }
  
  // Example usage
  const nums = [5, 7, 7, 8, 8, 10];
  const target = 8;
  const result = searchRange(nums, target);
  console.log(result); // Output: [3, 4]
  