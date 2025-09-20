// ❓ Question:
// You are given an array of scores of athletes. The athletes are ranked
// based on their scores, where the highest score gets rank 1, the second
// highest gets rank 2, and so on.
// The top 3 athletes receive medals instead of a numeric rank:
// - "Gold Medal" for the highest score
// - "Silver Medal" for the second highest score
// - "Bronze Medal" for the third highest score
// Return an array of strings representing the ranks of each athlete.
//
// Example 1:
// Input: [5, 3, 4, 1, 2]
// Output: ["Gold Medal", "Bronze Medal", "Silver Medal", "5", "4"]
//
// Example 2:
// Input: [10, 3, 8, 9, 4]
// Output: ["Gold Medal", "5", "Bronze Medal", "Silver Medal", "4"]

const findRelativeRank = (scores) => {
  let sorted = [...scores].sort((a, b) => b - a);
  let rank = new Map();

  for (let i = 0; i < sorted.length; i++) {
    if (i === 0) rank.set(sorted[i], "Gold Medal");
    else if (i === 1) rank.set(sorted[i], "Silver Medal"); // ✅ fixed spelling
    else if (i === 2) rank.set(sorted[i], "Bronze Medal");
    else rank.set(sorted[i], (i + 1).toString());
  }

  return scores.map((score) => rank.get(score));
};

// ✅ Test cases
console.log(findRelativeRank([5, 3, 4, 1, 2])); // ["Gold Medal", "Bronze Medal", "Silver Medal", "5", "4"]
console.log(findRelativeRank([10, 3, 8, 9, 4])); // ["Gold Medal", "5", "Bronze Medal", "Silver Medal", "4"]
console.log(findRelativeRank([1])); // ["Gold Medal"]
