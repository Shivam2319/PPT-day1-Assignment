function removeElement(nums, val) {
    let k = 0; // Number of elements not equal to val
  
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] !== val) {
        nums[k] = nums[i];
        k++;
      }
    }
  
    return k;
  }
  
  // Example usage
  const nums = [3, 2, 2, 3];
  const val = 3;
  const k = removeElement(nums, val);
  console.log(`k = ${k}, nums = [${nums.slice(0, k).join(", ")}]`);
  