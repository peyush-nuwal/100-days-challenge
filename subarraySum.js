/**
 * 🧮 Question:
 * Given an array of positive integers, find a continuous subarray whose sum equals a given target.
 * Return 1-based start and end indices of that subarray. If none exists, return [-1].
 *
 * Example:
 * Input: arr = [1, 2, 4, 5, 7, 3, 5], target = 10
 * Output: [2, 4]   // 2 + 4 + 5 = 10
 *
 * Constraints:
 * - Array contains only positive integers
 * - 1 <= arr.length <= 10^5
 * - 1 <= target <= 10^9
 */

function subarraySum(arr, target) {
  let start = 0;
  let sum = 0;

  for (let end = 0; end < arr.length; end++) {
    sum += arr[end];

    // shrink window from start while sum > target
    while (sum > target && start <= end) {
      sum -= arr[start];
      start++;
    }

    if (sum === target) {
      return [start + 1, end + 1]; // 1-based indices
    }
  }

  return [-1];
}

// ✅ Test Cases
console.log(subarraySum([1, 2, 4, 5, 7, 3, 5], 10)); // [2, 4]
console.log(subarraySum([1, 2, 3, 4, 5], 9)); // [2, 4]
console.log(subarraySum([1, 2, 3], 7)); // [-1]
console.log(subarraySum([5, 1, 2, 3], 5)); // [1, 1]
console.log(subarraySum([1, 2, 3, 4, 5], 15)); // [1, 5]
