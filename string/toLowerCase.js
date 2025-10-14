// ❓ Question:
// Implement a function `toLowerCase(s)` that converts a given string `s`
// into lowercase letters without using the built-in `.toLowerCase()` method.
// You should manually handle ASCII values to achieve this.
//
// Example 1:
// Input: "Hello"
// Output: "hello"
//
// Example 2:
// Input: "JAVASCRIPT"
// Output: "javascript"
//
// Example 3:
// Input: "123@Code"
// Output: "123@code"

const toLowerCase = (s) => {
  let ans = "";
  let asciiValues = [];

  for (let i = 0; i < s.length; i++) {
    asciiValues.push(s[i].charCodeAt());
  }

  for (let char of asciiValues) {
    ans += String.fromCharCode(char >= 65 && char <= 90 ? char + 32 : char);
  }
  return ans;
};

// ✅ Test cases
console.log("Hello ->", toLowerCase("Hello")); // hello
console.log("JAVASCRIPT ->", toLowerCase("JAVASCRIPT")); // javascript
console.log("123@Code ->", toLowerCase("123@Code")); // 123@code
