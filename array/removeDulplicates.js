/**
 * 🧩 LeetCode #26 — Remove Duplicates from Sorted Array
 *
 * 🔹 Problem:
 * Given a **sorted** integer array `nums`, remove the duplicates **in-place**
 * such that each element appears only once, and return the new length `k`.
 *
 * You must do this with **O(1)** extra space.
 *
 * The relative order of elements should be kept the same.
 *
 * ---
 * 🔸 Example 1:
 * Input:  nums = [1,1,2]
 * Output: 2, nums = [1,2,_]
 *
 * Explanation:
 * - The function should return k = 2.
 * - The first two elements of nums should be 1 and 2.
 * - The rest of the array values don't matter.
 *
 * ---
 * 🔸 Example 2:
 * Input:  nums = [0,0,1,1,1,2,2,3,3,4]
 * Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
 *
 * ---
 * 💡 Approach:
 * - Use two pointers: `i` (fast) and `j` (slow).
 * - Loop through the array.
 * - If nums[i] ≠ nums[j], increment j and copy nums[i] → nums[j].
 * - Return j + 1 as the new length.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

const removeDuplicates =  (nums)=> {
  if (nums.length === 0) return 0;

  let j = 0; 

  for (let i = 1; i < nums.length; i++) {
    if (nums[j] !== nums[i]) {
     
      nums[++j] = nums[i];
    }
  }

  return j + 1;
};



console.log(removeDuplicates([1, 1, 2]));//2
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));//5