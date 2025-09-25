// ----------------------
// Binary Search Tree (BST) Implementation
// ----------------------

// Node structure: stores value + left and right children
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

  // Insert a new value into the BST
  insert(val) {
    const newNode = new Node(val);

    // Case 1: Tree is empty → make new node the root
    if (this.root === null) {
      this.root = newNode;
      console.log(`Inserted ${val} as root`);
      return this;
    }

    let current = this.root;
    while (true) {
      // Case 2: Prevent inserting duplicate values
      if (newNode.val === current.val) {
        console.log(`Duplicate ${val} not inserted`);
        return this;
      }

      // Case 3: Insert on the left side if value is smaller
      if (newNode.val < current.val) {
        if (current.left === null) {
          current.left = newNode;
          console.log(`Inserted ${val} to the LEFT of ${current.val}`);
          return this;
        }
        current = current.left;
      }
      // Case 4: Insert on the right side if value is larger
      else {
        if (current.right === null) {
          current.right = newNode;
          console.log(`Inserted ${val} to the RIGHT of ${current.val}`);
          return this;
        }
        current = current.right;
      }
    }
  }

  // Search for a value in the BST
  includes(target) {
    if (this.root === null) {
      console.log(`Tree is empty. Cannot find ${target}`);
      return false; // consistent return type
    }

    let current = this.root;
    while (current) {
      if (current.val === target) {
        console.log(`Found ${target} in the tree ✅`);
        return true;
      } else if (target < current.val) {
        current = current.left;
      } else {
        current = current.right;
      }
    }

    console.log(`${target} not found in the tree ❌`);
    return false;
  }

  inOrder() {
    const res = []
    
    const traversal = (node)=> {
      if (!node) return; 
      
      traversal(node.left)
      res.push(node.val)
      traversal(node.right)
    }
    traversal(this.root)
    return res
  }
}

// ----------------------
// Test the BST
// ----------------------
const bst = new Tree();
console.log("Initial empty tree:", bst);

bst.insert(2);
bst.insert(5);
bst.insert(3);
bst.insert(4);
bst.insert(6);
bst.insert(8);
bst.insert(1);

console.log("\nFull tree object after insertions:");
console.log(JSON.stringify(bst, null, 2));

console.log("\nSearch tests:");
bst.includes(3); // should log "Found"
bst.includes(7); // should log "Not found"

// ----------------------
// Conceptual Graph View (for given insertions)
// ----------------------
// Insert order: 2, 5, 3, 4, 6, 8, 1
//
//           2
//         /   \
//        1     5
//             / \
//            3   6
//             \    \
//              4    8


// inorder traversal 
 console.log(bst.inOrder());