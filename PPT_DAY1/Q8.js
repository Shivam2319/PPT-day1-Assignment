function findErrorNums(nums) {
    const n = nums.length;
    const count = new Array(n + 1).fill(0);
  
    let duplicate = -1;
    let missing = -1;
  
    // Count the occurrences of each number in the input array
    for (let num of nums) {
      count[num]++;
    }
  
    // Find the duplicate and missing numbers
    for (let i = 1; i <= n; i++) {
      if (count[i] === 2) {
        duplicate = i;
      } else if (count[i] === 0) {
        missing = i;
      }
    }
  
    return [duplicate, missing];
  }
  
  // Test the function
  const nums = [1, 2, 2, 4];
  const result = findErrorNums(nums);
  console.log(result); // Output: [2, 3]
  