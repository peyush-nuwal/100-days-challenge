function isValidParenthesis(s) {
    const stack = []
    const map = {
        ")": "(",
        "]": "[",
        "}": "{",
    }
    for (let char of s) {
        if (char === "(" || char === "[" || char === "{") {
            stack.push(char);
        } else {
            if (stack.pop() !== map[char]) return false
        }
    }
    return stack.length === 0
}


console.log(isValidParenthesis("()")); // true
console.log(isValidParenthesis("()[]{}")); // true
console.log(isValidParenthesis("{[]}"));      // true (nested properly)
console.log(isValidParenthesis("([)]"));      // false (wrong order of closing)
console.log(isValidParenthesis("(((([[[{{{}}}]]]]))))")); // true (deeply nested and matched)
