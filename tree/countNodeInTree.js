/**
 * 🧮 Question:
 * Given the root of a binary tree, return the number of nodes in the tree.
 *
 * Examples:
 * 1️⃣ Input: root = [1, 2, 3]
 *      Tree:
 *          1
 *         / \
 *        2   3
 *      Output: 3
 *
 * 2️⃣ Input: root = []
 *      Output: 0
 *
 * Constraints:
 * - The number of nodes is in the range [0, 1000].
 */

/**
 * ✅ Approach 1: Basic Recursive Traversal
 */
const countNode = (root) => {
  let count = 0;

  function traversal(node) {
    if (node === null) return;
    traversal(node.left);
    count++;
    traversal(node.right); // fixed bug here
  }

  traversal(root);
  return count;
};

/**
 * ✅ Approach 2: Iterative BFS using Queue
 */
const countNodes2 = (root) => {
  if (!root) return 0;

  let count = 0;
  let queue = [root];

  while (queue.length) {
    const node = queue.shift();
    count++;
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }

  return count;
};

/** Helper function to create a simple tree */
function TreeNode(val, left = null, right = null) {
  return { val, left, right };
}

// ✅ Test Cases
const root1 = TreeNode(1, TreeNode(2), TreeNode(3));
console.log(countNode(root1)); // 3
console.log(countNodes2(root1)); // 3

const root2 = TreeNode(1, TreeNode(2, TreeNode(4), TreeNode(5)), TreeNode(3));
console.log(countNode(root2)); // 5
console.log(countNodes2(root2)); // 5

const root3 = null;
console.log(countNode(root3)); // 0
console.log(countNodes2(root3)); // 0

const root4 = TreeNode(1);
console.log(countNode(root4)); // 1
console.log(countNodes2(root4)); // 1
