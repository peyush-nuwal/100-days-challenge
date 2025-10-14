// ❓ Question:
// There is a robot starting at the origin point (0, 0) on a 2D plane.
// It can move in four directions:
// 'U' = Up, 'D' = Down, 'L' = Left, 'R' = Right.
// Given a string `moves`, return true if the robot returns to the origin
// after executing all moves, otherwise return false.
//
// Example 1:
// Input: "UD"
// Output: true
// Explanation: The robot moves up then down, returning to the origin.
//
// Example 2:
// Input: "LL"
// Output: false
// Explanation: The robot moves left twice and does not return.
//
// Example 3:
// Input: "UDLR"
// Output: true
// Explanation: Moves cancel out, robot ends up at origin again.

const judgeCircle = (str) => {
  let position = { x: 0, y: 0 };

  for (let char of str) {
    switch (char) {
      case "U":
        position.y += 1;
        break;
      case "D":
        position.y -= 1;
        break;
      case "R":
        position.x += 1;
        break;
      case "L":
        position.x -= 1;
        break;
    }
  }
  return position.x === 0 && position.y === 0;
};

// ✅ Test cases
console.log(judgeCircle("UD")); // true
console.log(judgeCircle("LL")); // false
console.log(judgeCircle("UDLR")); // true
