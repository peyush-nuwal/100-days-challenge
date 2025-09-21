/**
 * Question:
 *
 * You are given an array of strings `words`.
 * Each word can be converted into Morse code by replacing each letter with its Morse code representation.
 * Your task is to return the number of **unique Morse code transformations** among all the words.
 *
 * Morse code for each letter 'a' to 'z' is:
 * ".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---",
 * "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-",
 * "..-", "...-", ".--", "-..-", "-.--", "--.."
 *
 * Example 1:
 * Input: words = ["gin","zen","gig","msg"]
 * Output: 2
 * Explanation:
 * "gin" -> "--...-."
 * "zen" -> "--...-."
 * "gig" -> "--...--."
 * "msg" -> "--...--."
 * There are 2 unique transformations.
 *
 * Example 2:
 * Input: words = ["a","b","c","a"]
 * Output: 3
 * Explanation:
 * "a" -> ".-"
 * "b" -> "-..."
 * "c" -> "-.-."
 * "a" -> ".-"
 * There are 3 unique transformations.
 */

const uniqueMorseCodes = (words) => {
  const uniqueCodes = new Set();
  const morseCode = [
    ".-",
    "-...",
    "-.-.",
    "-..",
    ".",
    "..-.",
    "--.",
    "....",
    "..",
    ".---",
    "-.-",
    ".-..",
    "--",
    "-.",
    "---",
    ".--.",
    "--.-",
    ".-.",
    "...",
    "-",
    "..-",
    "...-",
    ".--",
    "-..-",
    "-.--",
    "--..",
  ];

  for (let word of words) {
    let converted = "";
    for (let i = 0; i < word.length; i++) {
      converted += morseCode[word[i].charCodeAt() - 97];
    }
    uniqueCodes.add(converted); // ✅ Add to set
  }
  return uniqueCodes.size;
};

// Test Cases
console.log(uniqueMorseCodes(["gin", "zen", "gig", "msg"])); // Output: 2
console.log(uniqueMorseCodes(["a", "b", "c", "a"])); // Output: 3
console.log(uniqueMorseCodes(["hello", "world"])); // Output: 2
console.log(uniqueMorseCodes(["abc", "bca", "cab"])); // Output: 3
console.log(uniqueMorseCodes(["zzz", "zzz", "zz"])); // Output: 2
