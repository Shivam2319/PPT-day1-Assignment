/*Given two strings word1 and word2, return *the minimum number of **steps** required to make* word1 *and* word2 *the same*.

In one **step**, you can delete exactly one character in either string.

**Example 1:**

**Input:** word1 = "sea", word2 = "eat"

**Output:** 2

**Explanation:** You need one step to make "sea" to "ea" and another step to make "eat" to "ea". */
function minDistance(word1, word2) {
    const m = word1.length;
    const n = word2.length;
  
    // Create a 2D array to store the minimum number of steps
    const dp = Array(m + 1)
      .fill()
      .map(() => Array(n + 1).fill(0));
  
    // Fill the first row and first column with incremental values
    for (let i = 1; i <= m; i++) {
      dp[i][0] = i;
    }
    for (let j = 1; j <= n; j++) {
      dp[0][j] = j;
    }
  
    // Calculate the minimum number of steps
    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        if (word1.charAt(i - 1) === word2.charAt(j - 1)) {
          dp[i][j] = dp[i - 1][j - 1];
        } else {
          dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + 1;
        }
      }
    }
  
    return dp[m][n];
  }
  
  // Example usage
  const word1 = "sea";
  const word2 = "eat";
  const result = minDistance(word1, word2);
  console.log(result);
  