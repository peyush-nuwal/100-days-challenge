function treeNode(val) {
  this.val = val ?? 0;
  this.left = null;
  this.right = null;
}

const root = new treeNode(1);

root.left = new treeNode(2);
root.left.left = new treeNode(4);
root.left.right = new treeNode(5);


root.right = new treeNode(3);
root.right.left = new treeNode(5);
root.right.right = new treeNode(6);



// depth first preOrder
const dfs = (root) => {
    if (!root) return null
     
    let res = []
    
    function traversal(node) {
        if (!node) return null
        
        res.push(node.val)
        traversal(node.left)
        traversal(node.right)
    }
    traversal(root)

    return res
}

console.log(dfs(root))
