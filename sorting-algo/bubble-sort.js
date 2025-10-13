let arr = [5, 1, 4, 2, 8];

const bubbleSort = (arr) => {
  for (let i = arr.length - 1; i > 0; i--) {
      let swapped = false;

    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
      }
    }

    if (!swapped) break; 
  }
    
    return arr
};
console.log(bubbleSort(arr))



// count number of swaps 


const swapCount = (arr) => {
    let swapCount=0
  for (let i = arr.length - 1; i > 0; i--) {
    let swapped = false;

    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
          swapCount++
        swapped = true;
      }
    }

    if (!swapped) break;
  }

  return swapCount;
};
console.log(swapCount( [5, 1, 4, 2, 8]));








