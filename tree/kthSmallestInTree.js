// ----------------------
// Question:
// Given the root of a binary search tree (BST) and an integer k,
// return the kth smallest element in the tree.
//
// 👉 Key Idea:
// Inorder traversal of a BST always gives a sorted list of elements.
// So if we traverse inorder and count nodes as we go,
// the kth element we encounter will be the kth smallest.
//
// Example Tree:
//        5
//       / \
//      3   7
//     / \
//    2   4
//
// Inorder Traversal = [2, 3, 4, 5, 7]
// k = 3 → Answer = 4
// ----------------------

// Node structure for the tree
class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const kthElement = (root, k) => {
  let count = 0; // keeps track of how many nodes we’ve visited so far (in sorted order)
  let res = null; // stores the answer once we find the kth element

  const inorder = (node) => {
    // Base case: if node is null OR we already found result, stop recursion
    if (!node || res !== null) return;

    // 1. Traverse left subtree
    inorder(node.left);

    // 2. Visit root node (in sorted order)
    count++;
    if (count === k) {
      res = node.val; // found kth smallest element
      return; // stop further traversal
    }

    // 3. Traverse right subtree
    inorder(node.right);
  };

  inorder(root);
  return res;
};

// ----------------------
// Why check `if (res !== null)`?
// ----------------------
// Once we find the kth element, we don't need to keep traversing
// the rest of the tree (saves time). Without this check, recursion
// would keep running unnecessarily even after finding the answer.
// ----------------------

// ----------------------
// Example Usage (custom tree)
// ----------------------
const root = new Node(5);
root.left = new Node(3);
root.right = new Node(7);
root.left.left = new Node(2);
root.left.right = new Node(4);

console.log(kthElement(root, 3));
// Output: 4
