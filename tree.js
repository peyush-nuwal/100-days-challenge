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
      if (newNode.val === current.val) {
        return undefined;
      }

      //for left side
      if (newNode.val < current.val) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  includes(target) {
    if (this.root === null) return undefined;
    let current = this.root;
    while (current) {
      if (current.val === target) {
        return true;
      } else if (current.val > target) {
        current = current.left;
      } else {
        current = current.right;
      }
    }

    return false;
  }
}

const bst = new Tree();
console.log(bst);
bst.insert(2);
bst.insert(5);
bst.insert(3);
bst.insert(4);
bst.insert(6);
bst.insert(8);
bst.insert(1);
console.log(bst);

console.log("finding 3", bst.includes(3));
console.log("finding 7", bst.includes(7));
