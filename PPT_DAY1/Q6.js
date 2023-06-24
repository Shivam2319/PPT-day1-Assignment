function containsDuplicate(nums) {
    // Create an empty set to store unique values
    let uniqueSet = new Set();
  
    // Traverse the array
    for (let i = 0; i < nums.length; i++) {
      // If the current value is already in the set, it's a duplicate
      if (uniqueSet.has(nums[i])) {
        return true;
      }
  
      // Add the current value to the set
      uniqueSet.add(nums[i]);
    }
  
    // No duplicates found
    return false;
  }
  
  // Example usage:
  const nums = [1, 2, 3, 1];
  console.log(containsDuplicate(nums)); // Output: true
  