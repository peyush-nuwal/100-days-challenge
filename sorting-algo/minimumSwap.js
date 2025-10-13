


const minimumSwap = (nums) => {
    if (!nums) return [];


    let left = 0, right = nums.length - 1;
    let swapCount = 0;
    

    while (left < right) {
        if (nums[left] > nums[right]) {
            [nums[left], nums[right]] = [nums[right], nums[left]]
            left++ 
            right--
             swapCount++;
        } else {
            left++
        }
    }


    return swapCount;

}

console.log(minimumSwap([1, 5, 4, 3, 2]));