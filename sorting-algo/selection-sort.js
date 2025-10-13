// const selectionSort = (nums) => {

//     for (let i = 0; i < nums.length ; i++){
//         let minIdx = i

//         for (let j = i+1; j < nums.length ; j++){
//             if (nums[j] < nums[minIdx]) {
//               minIdx = j;
//             }
//         }
//         if (i !== minIdx) {
//             [nums[i], nums[minIdx]] = [nums[minIdx], nums[i]];
//         }
//     }

//     return nums
// }

// console.log([4, 2, 5, 6, 1, 3]);
// console.log(selectionSort([4,2,5,6,1,3]));

// moduler version

const findMinIndex = (arr, start) => {
  let minIdx = start;

  for (let i = start + 1; i < arr.length; i++) {
    if (arr[i] < arr[minIdx]) {
      minIdx = i;
    }
  }
  return minIdx;
};

const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {


    const minIdx = findMinIndex(arr, i);

    if (i !== minIdx) {
      [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
      swapped=true
    }

      
    }
  return arr;
};

// console.log([4, 2, 5, 6, 1, 3]);
console.log(selectionSort([4, 2, 5, 6, 1, 3]));
