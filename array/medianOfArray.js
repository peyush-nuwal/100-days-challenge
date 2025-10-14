//leetcode 4  Median of Two Sorted Arrays

// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

// The overall run time complexity should be O(log (m+n)).

// Example 1:
// Input: nums1 = [1,3], nums2 = [2]
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.

// Example 2:
// Input: nums1 = [1,2], nums2 = [3,4]
// Output: 2.50000
// Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.

let nums1 = [1, 3];
let nums2 = [2];
 
const mergeSortedArray = (nums1, nums2) => {
  let i = 0,
    j = 0;
  let stack = [];

  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] < nums2[j]) {
      stack.push(nums1[i]);
      i++;
    } else {
      stack.push(nums2[j]);
      j++;
    }
  }

  // pushing left nums1 elements
  while (i < nums1.length) {
    stack.push(nums1[i]);
    i++;
  }
  // pushing left nums1 elements
  while (j < nums2.length) {
    stack.push(nums2[j]);
    j++;
    }
    
    let n= stack.length
    if (n % 2 === 0) {
        let mid = stack.length / 2
        let left= stack[mid-1]
        let right= stack[mid]
        return (left+right)/2
    }
    else {
         return stack[Math.floor(n / 2)];
    }
}


console.log(mergeSortedArray(nums1,nums2));