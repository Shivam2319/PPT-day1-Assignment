/*Given two strings s and t, *determine if they are isomorphic*.

Two strings s and t are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

**Example 1:**

**Input:** s = "egg", t = "add"

**Output:** true */
function isIsomorphic(s, t) {
  if (s.length !== t.length) {
    return false; // Different lengths, can't be isomorphic
  }
  
  const sMap = new Map(); // Map to store mappings from s to t
  const tSet = new Set(); // Set to check if a character in t has already been mapped
  
  for (let i = 0; i < s.length; i++) {
    const charS = s[i];
    const charT = t[i];
    
    if (sMap.has(charS)) {
      if (sMap.get(charS) !== charT) {
        return false; // Incorrect mapping
      }
    } else {
      if (tSet.has(charT)) {
        return false; // Character in t is already mapped to another character in s
      }
      sMap.set(charS, charT);
      tSet.add(charT);
    }
  }
  
  return true; // All characters have correct mappings
}
const s = "egg";
const t = "add";

const isomorphic = isIsomorphic(s, t);
console.log(isomorphic); // Output: true

