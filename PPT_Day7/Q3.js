/*Given two non-negative integers, num1 and num2 represented as string, return *the sum of* num1 *and* num2 *as a string*.

You must solve the problem without using any built-in library for handling large integers (such as BigInteger). You must also not convert the inputs to integers directly.

**Example 1:**

**Input:** num1 = "11", num2 = "123"

**Output:**

"134" */
function addStrings(num1, num2) {
    let sum = '';
    let carry = 0;
    let i = num1.length - 1;
    let j = num2.length - 1;
  
    while (i >= 0 || j >= 0 || carry > 0) {
      const digit1 = i >= 0 ? parseInt(num1[i]) : 0;
      const digit2 = j >= 0 ? parseInt(num2[j]) : 0;
      const currentSum = digit1 + digit2 + carry;
  
      sum = (currentSum % 10) + sum;
      carry = Math.floor(currentSum / 10);
      i--;
      j--;
    }
  
    return sum;
  }
  const num1 = "11";
  const num2 = "123";
  const sum = addStrings(num1, num2);
  console.log(sum); // Output: "134"
    