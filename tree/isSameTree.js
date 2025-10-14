/**
 * Question:
 * Given two Binary Search Trees (BSTs),
 * write a function to check if they are structurally identical
 * and have the same node values.
 *
 * Example:
 * Input:
 *    Tree1:       2
 *               /   \
 *              1     5
 *                   / \
 *                  3   6
 *                   \
 *                    4
 *
 *    Tree2:       2
 *               /   \
 *              1     5
 *                   / \
 *                  3   6
 *                   \
 *                    4
 *
 * Output: true
 *
 * Input:
 *    Tree1:       2
 *               /   \
 *              1     5
 *
 *    Tree2:       2
 *               /   \
 *              1     6
 *
 * Output: false
 */

// ----------------------
// Node + Tree classes
// ----------------------
class Node {
  constructor(val = null) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    const newNode = new Node(val);

    if (this.root === null) {
      this.root = newNode;
      return this;
    }

    let current = this.root;
    while (true) {
      if (val === current.val) return this; // no duplicates
      if (val < current.val) {
        if (!current.left) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (!current.right) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }
}

// ----------------------
// Compare two trees
// ----------------------
const isSameTree = (t1, t2) => {
  if (!t1 && !t2) return true;
  if (!t1 || !t2) return false;
  if (t1.val !== t2.val) return false;

  return isSameTree(t1.left, t2.left) && isSameTree(t1.right, t2.right);
};

// ----------------------
// Test Cases
// ----------------------
const t1 = new Tree();
t1.insert(2);
t1.insert(5);
t1.insert(3);
t1.insert(4);
t1.insert(6);
t1.insert(8);
t1.insert(1);

const t2 = new Tree();
t2.insert(2);
t2.insert(5);
t2.insert(3);
t2.insert(4);
t2.insert(6);
t2.insert(8);
t2.insert(1);

console.log("Test 1 → Same trees:", isSameTree(t1.root, t2.root)); // ✅ true

const t3 = new Tree();
t3.insert(2);
t3.insert(5);
t3.insert(3);
t3.insert(7); // different node

console.log("Test 2 → Different trees:", isSameTree(t1.root, t3.root)); // ❌ false

const t4 = new Tree();
t4.insert(10);

console.log("Test 3 → One node vs multi-node:", isSameTree(t1.root, t4.root)); // ❌ false

const t5 = new Tree();

console.log("Test 4 → Empty trees:", isSameTree(t5.root, null)); // ✅ true
