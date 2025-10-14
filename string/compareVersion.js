/**
 * Question: Compare two version numbers version1 and version2.
 *
 * A version number consists of one or more revisions joined by a dot '.'.
 * Each revision consists of digits and may contain leading zeros.
 * Revisions are compared as integers, ignoring leading zeros.
 *
 * Return:
 *   - 1 if version1 > version2
 *   - -1 if version1 < version2
 *   - 0 if they are equal
 *
 * Example:
 * compareVersion("1.2", "1.10") -> -1
 * because 2 < 10.
 *
 * compareVersion("1.01", "1.001") -> 0
 * because 01 == 001.
 *
 * compareVersion("1.0.1", "1") -> 1
 * because 1.0.1 > 1.
 *
 * compareVersion("7.5.2.4", "7.5.3") -> -1
 * because 2 < 3 at the third revision.
 */

const compareVersion = (v1, v2) => {
  let i = 0,
    j = 0;
  const n = v1.length,
    m = v2.length;

  while (i < n || j < m) {
    let num1 = 0,
      num2 = 0;

    while (i < n && v1[i] !== ".") {
      num1 = num1 * 10 + parseInt(v1[i], 10);
      i++;
    }
    if (i < n && v1[i] === ".") i++;

    while (j < m && v2[j] !== ".") {
      num2 = num2 * 10 + parseInt(v2[j], 10);
      j++;
    }
    if (j < m && v2[j] === ".") j++;

    if (num1 < num2) return -1;
    if (num1 > num2) return 1;
  }
  return 0;
};

// ✅ Test cases
console.log(compareVersion("1.2", "1.10")); // -1
console.log(compareVersion("1.01", "1.001")); // 0
console.log(compareVersion("1.0.1", "1")); // 1
console.log(compareVersion("7.5.2.4", "7.5.3")); // -1
console.log(compareVersion("1.0", "1.0.0")); // 0
console.log(compareVersion("2.1", "2.1.0")); // 0
console.log(compareVersion("3.0.5", "3.0.5")); // 0
