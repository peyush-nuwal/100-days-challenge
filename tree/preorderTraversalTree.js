/**
 * 🌲 Question:
 * Given the root of a binary tree, return the preorder traversal of its nodes' values.
 *
 * Preorder traversal order:
 * 1️⃣ Visit the current node
 * 2️⃣ Traverse the left subtree
 * 3️⃣ Traverse the right subtree
 *
 * Example:
 * Input:  [1, null, 2, 3]
 * Tree:
 *     1
 *      \
 *       2
 *      /
 *     3
 * Output: [1, 2, 3]
 *
 * Constraints:
 * - The number of nodes in the tree is in the range [0, 100].
 * - Node values are integers.
 */

const preOrder = (root) => {
  let res = [];

  function traversal(node) {
    if (!node) return; // ✅ base case to prevent null access
    res.push(node.val);
    traversal(node.left);
    traversal(node.right);
  }

  traversal(root);
  return res;
};

// ✅ Helper function to create simple binary trees for testing
function TreeNode(val, left = null, right = null) {
  return { val, left, right };
}

// ✅ Test Cases
const root1 = TreeNode(1, null, TreeNode(2, TreeNode(3)));
console.log(preOrder(root1)); // [1, 2, 3]

const root2 = TreeNode(1, TreeNode(2), TreeNode(3));
console.log(preOrder(root2)); // [1, 2, 3]

const root3 = TreeNode(1, TreeNode(2, TreeNode(4), TreeNode(5)), TreeNode(3));
console.log(preOrder(root3)); // [1, 2, 4, 5, 3]

const root4 = null;
console.log(preOrder(root4)); // []
