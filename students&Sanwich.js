/**
 * Problem: Number of Students Unable to Eat Lunch (LeetCode 1700)
 *
 * You are given two integer arrays students and sandwiches where:
 * - students[i] = 0 (prefers circular) or 1 (prefers square)
 * - sandwiches[j] = 0 (circular) or 1 (square)
 *
 * The students are in a queue, and the sandwiches are in a stack.
 *
 * Rules:
 * 1. If the student at the front of the queue prefers the sandwich on top of the stack,
 *    they take it and both are removed.
 * 2. Otherwise, the student goes to the end of the queue.
 * 3. This continues until no student wants the sandwich on the stack.
 *
 * Return the number of students unable to eat.
 *
 * Example:
 * Input: students = [1,1,0,0], sandwiches = [0,1,0,1]
 * Output: 0
 *
 * Explanation: Everyone eventually gets the sandwich they want.
 */

const allfed = (students, sandwiches) => {
  let count = 0;
  let isTrue = true;

  while (isTrue) {
    // if every student rotated once without success, break
    if (count === students.length) isTrue = false;

    if (students[0] === sandwiches[0]) {
      // student takes sandwich
      students.shift();
      sandwiches.shift();
      count = 0; // reset because one was fed
    } else {
      // move student to end
      let first = students.shift();
      students.push(first);
      count++;
    }
  }
  return count;
};

// --------------------- TEST CASES ---------------------

console.log(allfed([1, 1, 0, 0, 0, 1], [0, 0, 0, 1, 1, 1])); // Expected: 3
console.log(allfed([1, 1, 0, 0], [0, 1, 0, 1])); // Expected: 0
console.log(allfed([1, 1, 1, 0, 0, 0], [0, 0, 0, 1, 1, 1])); // Expected: 0
console.log(allfed([1, 0, 1, 0], [0, 1, 0, 1])); // Expected: 0
console.log(allfed([1, 0, 0, 1], [0, 0, 1, 1])); // Expected: 0
console.log(allfed([1, 1, 1], [0, 0, 0])); // Expected: 3
