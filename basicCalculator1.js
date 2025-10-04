/**
 * 🧮 Question:
 * Implement a basic calculator to evaluate a simple expression string.
 * The expression string may contain open/closed parentheses `(` and `)`,
 * plus `+` and `-` signs, non-negative integers, and spaces.
 *
 * Example:
 * Input: "1 + (2 - (3 + 4))"
 * Output: -4
 *
 * Constraints:
 * - You may assume the expression is always valid.
 * - Do not use built-in eval() or Function() constructors.
 */

const calculate = (s) => {
  let stack = [];
  let result = 0;
  let sign = 1;
  let i = 0;

  while (i < s.length) {
    let char = s[i];

    if (char === " ") {
      i++;
      continue;
    }

    if (char >= "0" && char <= "9") {
      let num = 0;
      while (i < s.length && s[i] >= "0" && s[i] <= "9") {
        num = num * 10 + parseInt(s[i]);
        i++;
      }
      result += sign * num;
      continue;
    }

    if (char === "+") {
      sign = 1;
    } else if (char === "-") {
      sign = -1;
    } else if (char === "(") {
      stack.push(result);
      stack.push(sign);
      result = 0;
      sign = 1;
    } else if (char === ")") {
      let prevSign = stack.pop();
      let prevResult = stack.pop();
      result = prevResult + prevSign * result;
    }

    i++;
  }

  return result;
};

// ✅ Test Cases
console.log(calculate("3 + 2")); // 5
console.log(calculate(" 2 - 1 + 2 ")); // 3
console.log(calculate("(1+(4+5+2)-3)+(6+8)")); // 23
console.log(calculate("1-(5)")); // -4
console.log(calculate("1 + (2 - (3 + 4))")); // -4
