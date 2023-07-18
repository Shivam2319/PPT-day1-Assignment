/*Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
You must write an algorithm with O(log n) runtime complexity.
Input: nums = [1,3,5,6], target = 5
Output: 2

Input: nums = [1,3,5,6], target = 7
Output: 4 */
function searchInsert(nums, target) {
    let left = 0;
    let right = nums.length - 1;
  
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
  
      if (nums[mid] === target) {
        return mid;
      } else if (nums[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  
    return left;
  }
  
  // Example usage
  const nums = [1, 3, 5, 6];
  const target = 5;
  const insertIndex = searchInsert(nums, target);
  console.log(insertIndex); // Output: 2
  
  const target2 = 7;
  const insertIndex2 = searchInsert(nums, target2);
  console.log(insertIndex2); // Output: 4
  