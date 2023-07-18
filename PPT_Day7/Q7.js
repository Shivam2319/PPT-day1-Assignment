/*Given two strings s and t, return true *if they are equal when both are typed into empty text editors*. '#' means a backspace character.

Note that after backspacing an empty text, the text will continue empty.

**Example 1:**

**Input:** s = "ab#c", t = "ad#c"

**Output:** true

**Explanation:**

Both s and t become "ac". */
function backspaceCompare(s, t) {
    const processString = function (str) {
      const stack = [];
  
      for (let char of str) {
        if (char === '#') {
          stack.pop(); // Remove the last character from the stack
        } else {
          stack.push(char); // Add non-backspace characters to the stack
        }
      }
  
      return stack.join(''); // Convert the stack to a string
    };
  
    const processedS = processString(s);
    const processedT = processString(t);
  
    return processedS === processedT;
  }
  const s = "ab#c";
  const t = "ad#c";
  const equalAfterBackspace = backspaceCompare(s, t);
  console.log(equalAfterBackspace); // Output: true
    