/*Given two sparse matrices mat1 of size m x k and mat2 of size k x n, return the result of mat1 x mat2. You may assume that multiplication is always possible.
**Input:** mat1 = [[1,0,0],[-1,0,3]], mat2 = [[7,0,0],[0,0,0],[0,0,1]]

**Output:**

[[7,0,0],[-7,0,3]] */
function multiplyMatrices(mat1, mat2) {
    const m = mat1.length;
    const k = mat1[0].length;
    const n = mat2[0].length;
  
    const result = Array.from({ length: m }, () => Array(n).fill(0));
  
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        for (let p = 0; p < k; p++) {
          result[i][j] += mat1[i][p] * mat2[p][j];
        }
      }
    }
  
    return result;
  }
  
  // Example usage:
  const mat1 = [[1, 0, 0], [-1, 0, 3]];
  const mat2 = [[7, 0, 0], [0, 0, 0], [0, 0, 1]];
  const result = multiplyMatrices(mat1, mat2);
  console.log(result);
  