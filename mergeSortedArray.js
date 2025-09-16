 
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