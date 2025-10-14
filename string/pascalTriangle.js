/**
 * Problem 1: Pascal’s Triangle
 * -----------------------------------
 * Given an integer numRows, generate the first numRows rows of Pascal’s Triangle.
 * In Pascal’s Triangle, each number is the sum of the two numbers directly above it.
 *
 * Example:
 * Input: numRows = 5
 * Output:
 * [
 *   [1],
 *   [1, 1],
 *   [1, 2, 1],
 *   [1, 3, 3, 1],
 *   [1, 4, 6, 4, 1]
 * ]
 */

const createPascalTriangle = (numRows) => {
  const triangle = [];
  if (numRows === 0) return [];

  triangle.push([1]);
  if (numRows === 1) return triangle;

  for (let i = 1; i < numRows; i++) {
    let prevRow = triangle[i - 1];
    let row = [];

    row.push(1);
    for (let j = 1; j < i; j++) {
      let element = prevRow[j - 1] + prevRow[j];
      row.push(element);
    }
    row.push(1);

    triangle.push(row);
  }
  return triangle;
};

// 🔹 Test Cases for createPascalTriangle
console.log("---- createPascalTriangle Tests ----");
console.log(createPascalTriangle(1));
// Expected: [[1]]

console.log(createPascalTriangle(2));
// Expected: [[1],[1,1]]

console.log(createPascalTriangle(5));
// Expected: [
//   [1],
//   [1,1],
//   [1,2,1],
//   [1,3,3,1],
//   [1,4,6,4,1]
// ]

/**
 * Problem 2: Pascal’s Triangle Row
 * -----------------------------------
 * Given an integer rowIndex, return the rowIndex-th row of Pascal’s Triangle.
 * The rowIndex starts from 0 (i.e., rowIndex = 0 → [1]).
 *
 * Example:
 * Input: rowIndex = 3
 * Output: [1, 3, 3, 1]
 */

const getPascalTriangleRow = (rowIndex) => {
  if (rowIndex === 0) return [1];
  let row = [];

  for (let i = 1; i <= rowIndex; i++) {
    let newRow = [];
    newRow.push(1);
    for (let j = 1; j < i; j++) {
      let element = row[j - 1] + row[j];
      newRow.push(element);
    }
    newRow.push(1);
    row = newRow;
  }

  return row;
};

// 🔹 Test Cases for getPascalTriangleRow
console.log("---- getPascalTriangleRow Tests ----");
console.log(getPascalTriangleRow(0));
// Expected: [1]

console.log(getPascalTriangleRow(1));
// Expected: [1,1]

console.log(getPascalTriangleRow(2));
// Expected: [1,2,1]

console.log(getPascalTriangleRow(3));
// Expected: [1,3,3,1]

console.log(getPascalTriangleRow(5));
// Expected: [1,5,10,10,5,1]
