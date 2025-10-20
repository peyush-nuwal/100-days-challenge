/**
 * LeetCode #112 - Path Sum
 *
 * Given the root of a binary tree and an integer targetSum,
 * return true if the tree has a root-to-leaf path such that
 * adding up all the values along the path equals targetSum.
 *
 * A leaf is a node with no children.
 *
 * Example:
 * Input: root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22
 * Output: true
 * Explanation: The path 5 → 4 → 11 → 2 sums to 22.
 */

/**
 * @param {TreeNode} root - The root node of the binary tree.
 * @param {number} targetSum - The sum to check for.
 * @return {boolean} - True if a root-to-leaf path equals targetSum.
 */
var hasPathSum = function (root, targetSum) {
  // Base case: if the tree is empty, no path exists
  if (!root) return false;

  // If the current node is a leaf (no left or right child)
  if (!root.left && !root.right) {
    // Check if subtracting the current node's value makes the target 0
    // That means the path sum equals targetSum
    return targetSum - root.val === 0;
  }

  // Subtract the current node's value from targetSum
  targetSum -= root.val;

  // Recursively check left and right subtrees
  // If either side has a valid path, return true
  return (
    hasPathSum(root.left, targetSum) || hasPathSum(root.right, targetSum)
  );
};

// Example test
/*
Example usage:
const tree = {
  val: 5,
  left: {
    val: 4,
    left: {
      val: 11,
      left: { val: 7, left: null, right: null },
      right: { val: 2, left: null, right: null },
    },
    right: null,
  },
  right: {
    val: 8,
    left: { val: 13, left: null, right: null },
    right: { val: 4, left: null, right: { val: 1, left: null, right: null } },
  },
};

console.log(hasPathSum(tree, 22)); // Output: true
*/
