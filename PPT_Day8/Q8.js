/*Given two strings s and goal, return true *if you can swap two letters in* s *so the result is equal to* goal*, otherwise, return* false*.*

Swapping letters is defined as taking two indices i and j (0-indexed) such that i != j and swapping the characters at s[i] and s[j].

- For example, swapping at indices 0 and 2 in "abcd" results in "cbad".

**Example 1:**

**Input:** s = "ab", goal = "ba"

**Output:** true

**Explanation:** You can swap s[0] = 'a' and s[1] = 'b' to get "ba", which is equal to goal. */
function buddyStrings(s, goal) {
    if (s.length !== goal.length) {
      return false;
    }
  
    if (s === goal) {
      const charCount = new Map();
      for (let i = 0; i < s.length; i++) {
        const char = s.charAt(i);
        if (charCount.has(char)) {
          return true;
        }
        charCount.set(char, true);
      }
      return false;
    }
  
    const mismatchedIndices = [];
    for (let i = 0; i < s.length; i++) {
      if (s.charAt(i) !== goal.charAt(i)) {
        mismatchedIndices.push(i);
      }
    }
  
    return (
      mismatchedIndices.length === 2 &&
      s.charAt(mismatchedIndices[0]) === goal.charAt(mismatchedIndices[1]) &&
      s.charAt(mismatchedIndices[1]) === goal.charAt(mismatchedIndices[0])
    );
  }
  
  // Example usage
  const s = "ab";
  const goal = "ba";
  const result = buddyStrings(s, goal);
  console.log(result);
  