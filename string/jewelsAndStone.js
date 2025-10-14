/**
 * Question:
 *
 * You are given two strings: jewels and stones.
 * - jewels represents the types of stones that are jewels.
 * - stones represents the stones you have.
 *
 * Each character in stones is a type of stone you own.
 * You need to return how many of the stones you have are also jewels.
 *
 * Example 1:
 * Input: jewels = "aA", stones = "aAAbbbbb"
 * Output: 3
 * Explanation: "a" appears 1 time and "A" appears 2 times in stones. Total = 3.
 *
 * Example 2:
 * Input: jewels = "z", stones = "ZZzzzz"
 * Output: 4
 * Explanation: Only 'z' is a jewel, and it appears 4 times in stones.
 *
 * Example 3:
 * Input: jewels = "bcd", stones = "abcde"
 * Output: 3
 * Explanation: jewels are 'b','c','d'. Stones "abcde" contain b,c,d once each → 3 total.
 *
 * Constraints:
 * - 1 <= jewels.length, stones.length <= 50
 * - jewels and stones consist of only English letters
 * - All characters of jewels are unique
 */

const numOfjewelsInStones = (jewels, stones) => {
  const jewelsSet = new Set();
  let count = 0;
  for (let jew of jewels) {
    jewelsSet.add(jew);
  }

  for (let stone of stones) {
    if (jewelsSet.has(stone)) count++;
  }

  return count;
};

// Test Cases
console.log(numOfjewelsInStones("aA", "aAAbbbbb")); // Output: 3
console.log(numOfjewelsInStones("z", "ZZzzzz")); // Output: 4
console.log(numOfjewelsInStones("bcd", "abcde")); // Output: 3
console.log(numOfjewelsInStones("x", "abcdef")); // Output: 0
