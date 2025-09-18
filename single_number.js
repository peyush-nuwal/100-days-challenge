/**
 * Question: Single Number
 *
 * Given a non-empty array of integers, every element appears more than once except for one.
 * Find that single one.
 *
 * Example 1:
 * Input: [1,1,1,0,0,0,8]
 * Output: 8
 *
 * Example 2:
 * Input: [2,2,3,3,4]
 * Output: 4
 *
 * Example 3:
 * Input: [5]
 * Output: 5
 *
 * Note:
 * - You must implement a solution with linear runtime complexity O(n).
 * - You can only use extra space O(1) (bit manipulation approach).
 */

const findNum = (arr) => {
  const map = new Map();

  // Count frequencies of each number
  for (let num of arr) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  // Find the one that appears only once
  for (let [key, val] of map) {
    if (val === 1) return key;
  }
};

// Test cases
console.log(findNum([1, 1, 1, 0, 0, 0, 8])); // 8
console.log(findNum([2, 2, 3, 3, 4])); // 4
console.log(findNum([5])); // 5
