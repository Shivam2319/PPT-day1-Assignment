function moveZeroes(nums) {
    let index = 0; // Index to keep track of the position to insert non-zero elements
  
    // Iterate through the array
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] !== 0) {
        // If the current element is non-zero, move it to the current index
        nums[index] = nums[i];
        index++;
      }
    }
  
    // Fill the remaining positions with zeros
    while (index < nums.length) {
      nums[index] = 0;
      index++;
    }
  }
  
  // Example usage:
  let nums = [0, 1, 0, 3, 12];
  moveZeroes(nums);
  console.log(nums);
  