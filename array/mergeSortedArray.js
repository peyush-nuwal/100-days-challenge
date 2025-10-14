 /**
 * Question: Merge Sorted Array
 *
 * You are given two integer arrays nums1 and nums2, sorted in non-decreasing order,
 * and two integers m and n, representing the number of elements in nums1 and nums2 respectively.
 *
 * nums1 has a length of m + n, where the first m elements denote the elements to be merged,
 * and the last n elements are set to 0 and should be ignored.
 *
 * Merge nums2 into nums1 as one sorted array, in-place.
 *
 * Example 1:
 * Input: nums1 = [1,2,3,0,0,0], m = 3
 *        nums2 = [2,5,6], n = 3
 * Output: [1,2,2,3,5,6]
 *
 * Example 2:
 * Input: nums1 = [-10,-1,0,3,0,0,0], m = 4
 *        nums2 = [1,2,5,6], n = 4
 * Output: [-10,-1,0,1,2,3,5,6]
 *
 * Example 3:
 * Input: nums1 = [1], m = 1
 *        nums2 = [], n = 0
 * Output: [1]
 */

let mergeArray = (nums1,m,nums2,n) => {
    let i = m - 1, j = n - 1, k = m + n - 1;

    while (j >= 0) {
        if (i > 0 && nums1[i] > nums2[j]) {
            nums1[k] = nums1[i]
            i--
        } else {
            nums1[k] = nums2[j]
            j--
        }
        k--
    }
    return nums1
}
 
console.log(mergeArray([1,2,3,0,0,0],3,[2,5,6],3));
console.log(mergeArray([-10,-1,0,3,0,0,0],4,[1,2,5,6,],4));