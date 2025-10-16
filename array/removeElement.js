/**
 * 🧩 LeetCode #27 — Remove Element
 *
 * 🔹 Problem:
 * Given an integer array `nums` and an integer `val`,
 * remove all occurrences of `val` **in-place**.
 * The order of the elements may be changed.
 *
 * After removal, return the number of elements left (k)
 * such that the first k elements of nums contain the valid result.
 *
 * You must do this using **O(1)** extra space.
 *
 * ---
 * 🔸 Example 1:
 * Input: nums = [3,2,2,3], val = 3
 * Output: 2, nums = [2,2,_,_]
 * Explanation:
 * Your function should return k = 2,
 * with the first two elements of nums being 2 and 2.
 *
 * ---
 * 🔸 Example 2:
 * Input: nums = [0,1,2,2,3,0,4,2], val = 2
 * Output: 5, nums = [0,1,3,0,4,_,_,_]
 *
 * ---
 * 💡 Approach:
 * - Use two pointers (i and n).
 * - Loop through the array:
 *    - If nums[i] equals target, replace it with the last element
 *      (nums[n - 1]) and reduce the size `n` (ignore the tail).
 *    - If not, just move i forward.
 * - Stop when i >= n.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

const removeElement = (nums, target) => {
  let i = 0;
  let n = nums.length;

  while (i < n) {
    if (nums[i] === target) {
      nums[i] = nums[n - 1]; // replace current with last
      n--; // shrink array size
    } else {
      i++;
    }
  }

  return n;
};

// 🧪 Demo
console.log(removeElement([2, 2, 3, 3], 3)); // Output: 2
console.log(removeElement([3, 2, 2, 3], 3)); // Output: 2
