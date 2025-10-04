/**
 * 🧮 Question:
 * Given a sorted (ascending) array, convert it into a height-balanced binary search tree (BST).
 *
 * A height-balanced BST is defined as a binary tree in which the depth of the two subtrees
 * of every node never differs by more than 1.
 *
 * Example:
 * Input: [1, 2, 3, 4, 5]
 * Output: A BST, e.g.:
 *          3
 *        /   \
 *       2     5
 *      /     /
 *     1     4
 *
 * Constraints:
 * - The number of elements in the array is in the range [0, 1000].
 * - Array is sorted in strictly increasing order.
 */

/** TreeNode constructor */
function TreeNode(val, left = null, right = null) {
  this.val = val;
  this.left = left;
  this.right = right;
}

/** Convert sorted array to height-balanced BST */
const convertArrayToTree = (arr) => {
  function createBST(left, right) {
    if (left > right) return null;

    const mid = Math.floor((left + right) / 2);
    const node = new TreeNode(arr[mid]);

    node.left = createBST(left, mid - 1);
    node.right = createBST(mid + 1, right);
    return node;
  }

  return createBST(0, arr.length - 1);
};

/** Helper: Preorder traversal to visualize the tree */
const preOrder = (root) => {
  if (!root) return [];
  return [root.val, ...preOrder(root.left), ...preOrder(root.right)];
};

/** ✅ Test Cases */
const root1 = convertArrayToTree([1, 2, 3, 4, 5]);
console.log(preOrder(root1)); // [3, 2, 1, 5, 4]

const root2 = convertArrayToTree([1, 2, 3]);
console.log(preOrder(root2)); // [2, 1, 3]

const root3 = convertArrayToTree([]);
console.log(preOrder(root3)); // []
