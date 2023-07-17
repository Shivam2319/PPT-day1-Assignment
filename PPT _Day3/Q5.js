/* 
💡 You are given a large integer represented as an integer array digits, where each
digits[i] is the ith digit of the integer. The digits are ordered from most significant
to least significant in left-to-right order. The large integer does not contain any
leading 0's.

Increment the large integer by one and return the resulting array of digits.

**Example 1:**
Input: digits = [1,2,3]
Output: [1,2,4]

**Explanation:** The array represents the integer 123.
Incrementing by one gives 123 + 1 = 124.
Thus, the result should be [1,2,4].

 */

function incrementLargeInteger(digits) {
    const n = digits.length;
    
    // Start from the least significant digit
    for (let i = n - 1; i >= 0; i--) {
      // Increment the current digit by one
      digits[i]++;
      
      // If the digit is less than 10, no carry needed, so return the result
      if (digits[i] < 10) {
        return digits;
      }
      
      // If the digit is 10, set it to 0 and continue to the next digit
      digits[i] = 0;
    }
    
    // If we reach this point, it means all digits were 9, so we need to add a new leading digit
    digits.unshift(1);
    
    return digits;
  }
  
  // Test case
  const digits = [1, 2, 3];
  const result = incrementLargeInteger(digits);
  console.log(result); // Output: [1, 2, 4]
  