/*Given two strings s and p, return *an array of all the start indices of* p*'s anagrams in* s. You may return the answer in **any order**.

An **Anagram** is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

**Example 1:**

**Input:** s = "cbaebabacd", p = "abc"

**Output:** [0,6]

**Explanation:**

The substring with start index = 0 is "cba", which is an anagram of "abc".

The substring with start index = 6 is "bac", which is an anagram of "abc". */
function findAnagrams(s, p) {
    const result = [];
    const targetCount = new Array(26).fill(0);
    const windowCount = new Array(26).fill(0);
    const aCharCode = 'a'.charCodeAt(0);
  
    // Count the frequency of characters in p
    for (let i = 0; i < p.length; i++) {
      targetCount[p.charCodeAt(i) - aCharCode]++;
    }
  
    let left = 0;
    let right = 0;
  
    while (right < s.length) {
      const rightChar = s.charCodeAt(right) - aCharCode;
      windowCount[rightChar]++;
  
      while (windowCount[rightChar] > targetCount[rightChar]) {
        const leftChar = s.charCodeAt(left) - aCharCode;
        windowCount[leftChar]--;
        left++;
      }
  
      if (right - left + 1 === p.length) {
        result.push(left);
      }
  
      right++;
    }
  
    return result;
  }
  
  // Example usage
  const s = "cbaebabacd";
  const p = "abc";
  const indices = findAnagrams(s, p);
  console.log(indices);
  