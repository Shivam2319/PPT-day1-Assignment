/*You need to construct a binary tree from a string consisting of parenthesis and integers.

The whole input represents a binary tree. It contains an integer followed by zero, one or two pairs of parenthesis. The integer represents the root's value and a pair of parenthesis contains a child binary tree with the same structure.
You always start to construct the **left** child node of the parent first if it exists.
**Input:** s = "4(2(3)(1))(6(5))"

**Output:** [4,2,6,3,1,5] */
class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }
  
  function constructBinaryTree(s) {
    if (!s || s.length === 0) {
      return null;
    }
  
    const stack = [];
    let root = null;
    let currentNum = '';
  
    for (let i = 0; i < s.length; i++) {
      const char = s.charAt(i);
  
      if (!isNaN(char)) {
        currentNum += char;
      } else if (char === '(') {
        if (currentNum !== '') {
          const newNode = new TreeNode(Number(currentNum));
  
          if (root === null) {
            root = newNode;
          } else {
            const parent = stack[stack.length - 1];
            if (!parent.left) {
              parent.left = newNode;
            } else {
              parent.right = newNode;
            }
          }
  
          stack.push(newNode);
          currentNum = '';
        }
      } else if (char === ')') {
        stack.pop();
      }
    }
  
    return root;
  }
  
  function traverseInorder(root) {
    if (root === null) {
      return [];
    }
  
    const result = [];
    const stack = [];
    let current = root;
  
    while (current !== null || stack.length > 0) {
      while (current !== null) {
        stack.push(current);
        current = current.left;
      }
  
      current = stack.pop();
      result.push(current.val);
      current = current.right;
    }
  
    return result;
  }
  
  // Example usage
  const s = "4(2(3)(1))(6(5))";
  const root = constructBinaryTree(s);
  const result = traverseInorder(root);
  console.log(result);
  