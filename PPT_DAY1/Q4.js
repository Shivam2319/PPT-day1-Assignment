function plusOne(digits) {
    const n = digits.length;
    
    // Start from the rightmost digit
    for (let i = n - 1; i >= 0; i--) {
      // Increment the current digit by 1
      digits[i]++;
      
      // If the digit becomes 10, set it to 0 and carry over the 1
      if (digits[i] === 10) {
        digits[i] = 0;
      } else {
        // No more carrying required, return the digits
        return digits;
      }
    }
    
    // If we reach here, it means all digits were 9's and got set to 0, so we need to add an extra leading digit 1
    digits.unshift(1);
    return digits;
  }
  
  // Test case
  const digits = [1, 2, 3];
  const result = plusOne(digits);
  console.log(result); // Output: [1, 2, 4]
  