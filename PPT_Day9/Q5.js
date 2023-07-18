/*Find the majority element in the array. A majority element in an array A[] of size n is an element that appears more than n/2 times (and hence there is at most one such element). 
Input: A[]={3, 3, 4, 2, 4, 4, 2, 4, 4}
Output: 4
Explanation: The frequency of 4 is 5 which is greater than half of the size of the array size.  */
function majorityElement(nums) {
    let count = 0;
    let candidate = null;
  
    for (let i = 0; i < nums.length; i++) {
      if (count === 0) {
        candidate = nums[i];
        count++;
      } else if (nums[i] === candidate) {
        count++;
      } else {
        count--;
      }
    }
  
    return candidate;
  }
  
  // Example usage
  const nums = [3, 3, 4, 2, 4, 4, 2, 4, 4];
  const majority = majorityElement(nums);
  console.log(majority); // Output: 4
  