const findElement = (matrix, target) => {
    let row = matrix.length, col = matrix[0].length;
    let left =0,right= row*col-1
    
    while (left <= right) {
        let mid = Math.floor((left + right) / 2)
        let value = matrix[Math.floor(mid / col)][mid % col]
        
        if (value === target) return true;
        else if (value < target) left = mid + 1
        else right=mid-1
    }
    return false

}

console.log(findElement([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]],3))