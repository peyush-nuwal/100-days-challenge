const createPascalTriangle = (numRows) => {
    const triangle = []
    if (numRows === 0) return []
    
    triangle.push([1])
    if (numRows === 1) return triangle;

    for (let i = 1; i < numRows; i++){
        let prevRow = triangle[i - 1]
        let row = []
        
        row.push(1)
        for (let j = 1; j < i; j++){
            let element = prevRow[j - 1] + prevRow[j]
            row.push(element);
        }
        row.push(1)

        triangle.push(row)
    }
return triangle
}

console.log(createPascalTriangle(5));