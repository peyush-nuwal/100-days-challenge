// ❓ Question:
// Given an integer array `nums` of length `2n`, your task is to group these numbers into `n` pairs
// (nums[2i], nums[2i+1]) such that the sum of the minimum of each pair is maximized.
// Return this maximum possible sum.
//
// Example 1:
// Input: [3, 4, 1, 2]
// Output: 4
// Explanation: Pairs = (1,2), (3,4) → min(1,2) + min(3,4) = 1 + 3 = 4
//
// Example 2:
// Input: [6, 2, 6, 5, 1, 2]
// Output: 9
// Explanation: Pairs = (1,2), (2,5), (6,6) → 1 + 2 + 6 = 9

const arrayPairSum = (arr) => {
  let sorted = arr.sort((a, b) => a - b);
  let sum = 0;

  for (let i = 0; i < sorted.length; i += 2) {
    sum += sorted[i];
  }
  return sum;
};

// ✅ Test cases
console.log(arrayPairSum([3, 4, 1, 2])); // 4
console.log(arrayPairSum([6, 2, 6, 5, 1, 2])); // 9
console.log(arrayPairSum([1, 1, 1, 1])); // 2
