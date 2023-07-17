/*
💡 You have n coins and you want to build a staircase with these coins. The staircase consists of k rows where the ith row has exactly i coins. The last row of the staircase **may be** incomplete.

Given the integer n, return *the number of **complete rows** of the staircase you will build*.

**Example 1:**
 */
function arrangeCoins(n) {
    let completeRows = 0;
  
    while (n >= completeRows + 1) {
      completeRows++;
      n -= completeRows;
    }
  
    return completeRows - 1;
  }
  
  // Example usage:
  const n = 5;
  const completeRowsCount = arrangeCoins(n);
  console.log(completeRowsCount);
  