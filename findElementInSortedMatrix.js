/**
 * Question: Search a 2D Matrix
 *
 * You are given an m x n matrix where:
 * - Each row is sorted in ascending order
 * - The first integer of each row is greater than the last integer of the previous row
 *
 * Write a function that returns true if the target exists in the matrix, otherwise false.
 * The algorithm must run in O(log(m * n)) time.
 *
 * Example 1:
 * Input: matrix = [
 *   [1, 3, 5, 7],
 *   [10, 11, 16, 20],
 *   [23, 30, 34, 60]
 * ], target = 3
 * Output: true
 *
 * Example 2:
 * Input: matrix = [
 *   [1, 3, 5, 7],
 *   [10, 11, 16, 20],
 *   [23, 30, 34, 60]
 * ], target = 13
 * Output: false
 *
 * Example 3:
 * Input: matrix = [[1]], target = 1
 * Output: true
 */

const findElement = (matrix, target) => {
  let row = matrix.length; // number of rows
  let col = matrix[0].length; // number of columns
  let left = 0; // starting index in virtual 1D array
  let right = row * col - 1; // ending index in virtual 1D array

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let value = matrix[Math.floor(mid / col)][mid % col];

    if (value === target) return true;
    else if (value < target) left = mid + 1;
    else right = mid - 1;
  }
  return false;
};

console.log(
  findElement(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    3
  )
);
