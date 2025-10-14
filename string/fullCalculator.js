/**
 * 🧮 Question:
 * Implement a calculator to evaluate a simple mathematical expression string.
 * The expression may contain:
 * - non-negative integers
 * - '+', '-', '*', '/' operators
 * - parentheses '(' and ')'
 * - and spaces
 *
 * You must follow the standard operator precedence:
 *  - Multiplication and division have higher precedence than addition/subtraction.
 *
 * Example:
 * Input: "2*(5+5*2)/3+(6/2+8)"
 * Output: 21
 *
 * Constraint:
 * - Do not use eval() or Function()
 * - Assume the expression is valid
 */

var calculate = function (s) {
  let i = 0; // pointer to traverse the string

  function helper() {
    const stack = [];
    let num = 0;
    let op = "+"; // current operator

    while (i < s.length) {
      let char = s[i];

      if (char === " ") {
        i++;
        continue;
      }

      if (char >= "0" && char <= "9") {
        num = num * 10 + parseInt(char);
      }

      if (char === "(") {
        i++;
        num = helper(); // recursively calculate value inside parentheses
      }

      // When encountering an operator or end of expression
      if (
        (!(char >= "0" && char <= "9") && char !== " ") ||
        i === s.length - 1
      ) {
        switch (op) {
          case "+":
            stack.push(num);
            break;
          case "-":
            stack.push(-num);
            break;
          case "*":
            stack.push(stack.pop() * num);
            break;
          case "/":
            // truncate towards zero like integer division
            stack.push(Math.trunc(stack.pop() / num));
            break;
        }

        if (char === ")") break; // end current subexpression

        op = char; // update operator
        num = 0;
      }

      i++;
    }

    // sum up the current stack
    return stack.reduce((acc, curr) => acc + curr, 0);
  }

  return helper();
};

// ✅ Test Cases
console.log(calculate("3 + 2 * 2")); // 7
console.log(calculate(" 3/2 ")); // 1
console.log(calculate(" 3+5 / 2 ")); // 5
console.log(calculate("(2+3)*(4-1)")); // 15
console.log(calculate("2*(5+5*2)/3+(6/2+8)")); // 21
console.log(calculate("1+(2*(3+(4*(5+6))))")); // 95
