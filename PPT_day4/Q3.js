/* 
💡 Given a 2D integer array matrix, return *the **transpose** of* matrix.

The **transpose** of a matrix is the matrix flipped over its main diagonal, switching the matrix's row and column indices.

**Example 1:**

Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]

Output: [[1,4,7],[2,5,8],[3,6,9]]

 */
function transpose(matrix) {
    const rows = matrix.length;
    const columns = matrix[0].length;
    const transposed = [];
  
    for (let j = 0; j < columns; j++) {
      const newRow = [];
  
      for (let i = 0; i < rows; i++) {
        newRow.push(matrix[i][j]);
      }
  
      transposed.push(newRow);
    }
  
    return transposed;
  }
  
  // Example usage:
  const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  const transposedMatrix = transpose(matrix);
  console.log(transposedMatrix);
  