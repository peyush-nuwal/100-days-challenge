/**
 * 🧩 Zigzag Conversion Problem
 *
 * The string "PAYPALISHIRING" is written in a zigzag pattern
 * on a given number of rows like this:
 *
 * P   A   H   N
 * A P L S I I G
 * Y   I   R
 *
 * Then read line by line:
 * Output: "PAHNAPLSIIGYIR"
 *
 * Write a function that performs this conversion:
 *     string convert(string s, int numRows)
 *
 * Example 1:
 * Input: s = "PAYPALISHIRING", numRows = 3
 * Output: "PAHNAPLSIIGYIR"
 *
 * Example 2:
 * Input: s = "HELLOWORLD", numRows = 4
 * Output: "HOEWRLOLLD"
 *
 * Explanation:
 * H     O
 * E   W R
 * L O  L
 * L     D
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

const zigzag = (s, numRows) => {
  // Edge case: no zigzag needed
  if (numRows === 1 || s.length <= numRows) return s;

  let idx = 0;
  let direction = 1; // 1 = down, -1 = up
  const rows = new Array(numRows).fill().map(() => []);

  for (let char of s) {
    rows[idx].push(char);

    if (idx === 0) direction = 1;
    else if (idx === numRows - 1) direction = -1;

    idx += direction;
  }

  // Join each row and return final result
  return rows.map((row) => row.join("")).join("");
};

// 🧪 Demo
console.log(zigzag("PAYPALISHIRING", 3)); // "PAHNAPLSIIGYIR"
console.log(zigzag("HELLOWORLD", 4)); // "HOEWRLOLLD"
console.log(zigzag("ABCD", 2)); // "ACBD"
