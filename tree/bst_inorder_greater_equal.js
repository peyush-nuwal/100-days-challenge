// ----------------------
// Question:
// Given a Binary Search Tree (BST) and an integer k,
// perform an inorder traversal and print all elements
// greater than or equal to k.
//
// Example Tree:
//
//       8
//      / \
//     3   10
//    / \    \
//   1   6    14
//      / \   /
//     4   7 13
//
// If k = 6, the output should be:
// 6 7 8 10 13 14
//
// Hint:
// - Use inorder traversal (Left → Root → Right)
// - During traversal, only print values if they are >= k
// - Try using recursion for practice
// ----------------------

// Optional: Node structure starter

class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}


// Optional: Function starter

const printGEK = (root, k) => {
    const res = []
    const traversal = (node) => {
        if (!node) return
        
         if (node.val >= k) traversal(node.left);
        if (node.val >= k) {
            res.push(node.val)
        }
        traversal(node.right)


    }
    traversal(root)

    return res
    
};

// Tree 
const root = new Node(8);
root.left = new Node(3);
root.right = new Node(10);
root.left.left = new Node(1);
root.left.right = new Node(6);
root.left.right.left = new Node(4);
root.left.right.right = new Node(7);

//right side 
root.right.right= new Node(14)
root.right.right.left= new Node(13)


console.log(printGEK(root,6))