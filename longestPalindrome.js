/*
💡 Question: Longest Palindromic Substring
-----------------------------------------
Given a string s, return the longest palindromic substring in s.

A palindrome is a string that reads the same forward and backward.

Example:
Input: s = "babad"
Output: "bab" 
Explanation: "aba" is also a valid answer.

Constraints:
1 <= s.length <= 1000
s consists of only digits and English letters.
*/

const longestPalindrome = (s) => {
  if (s.length < 1) return s;

  let start = 0;
  let end = 0;

  // Expand around the given center (for both odd & even cases)
  function expandAroundEdges(left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }
    return right - left - 1; // actual palindrome length
  }

  for (let i = 0; i < s.length; i++) {
    let len1 = expandAroundEdges(i, i); // odd length palindrome
    let len2 = expandAroundEdges(i, i + 1); // even length palindrome
    let len = Math.max(len1, len2);

    if (len > end - start) {
      start = i - Math.floor((len - 1) / 2);
      end = i + Math.floor(len / 2);
    }
  }
  return s.substring(start, end + 1);
};

// 🧪 Test Cases
console.log(longestPalindrome("babad")); // "bab" or "aba"
console.log(longestPalindrome("cbbd")); // "bb"
console.log(longestPalindrome("a")); // "a"
console.log(longestPalindrome("ac")); // "a" or "c"
console.log(longestPalindrome("abbbas")); // "abbba"
console.log(longestPalindrome("forgeeksskeegfor")); // "geeksskeeg"
