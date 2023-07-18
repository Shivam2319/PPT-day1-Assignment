/*Given two strings s1 and s2, return *the lowest **ASCII** sum of deleted characters to make two strings equal*.

**Example 1:**

**Input:** s1 = "sea", s2 = "eat"

**Output:** 231

**Explanation:** Deleting "s" from "sea" adds the ASCII value of "s" (115) to the sum.

Deleting "t" from "eat" adds 116 to the sum.

At the end, both strings are equal, and 115 + 116 = 231 is the minimum sum possible to achieve this. */
function minimumDeleteSum(s1, s2) {
  const m = s1.length;
  const n = s2.length;
  
  // Create a 2D array to store the minimum ASCII sum of deleted characters
  const dp = Array(m + 1)
    .fill()
    .map(() => Array(n + 1).fill(0));

  // Calculate the minimum ASCII sum of deleted characters
  for (let i = m - 1; i >= 0; i--) {
    dp[i][n] = dp[i + 1][n] + s1.charCodeAt(i);
  }

  for (let j = n - 1; j >= 0; j--) {
    dp[m][j] = dp[m][j + 1] + s2.charCodeAt(j);
  }

  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      if (s1.charAt(i) === s2.charAt(j)) {
        dp[i][j] = dp[i + 1][j + 1];
      } else {
        dp[i][j] = Math.min(
          dp[i + 1][j] + s1.charCodeAt(i),
          dp[i][j + 1] + s2.charCodeAt(j)
        );
      }
    }
  }

  return dp[0][0];
}

// Example usage
const s1 = "sea";
const s2 = "eat";
const result = minimumDeleteSum(s1, s2);
console.log(result);
