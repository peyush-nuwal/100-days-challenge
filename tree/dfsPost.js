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
root.right.left = new treeNode(6);
root.right.right = new treeNode(7);

// depth first postOrder
const dfsPost = (root, res = []) => {
  if (!root) return res;
  let node = root;

  if (node.left) dfsPost(node.left, res);
    if (node.right) dfsPost(node.right, res);
    res.push(node.val)
    

  return res;
};

// console.log(dfsPost(root));


const dfsSet = (root) => {
    if (!root) return []
    let queue=[]
    const res=[]
     let node = root
 
    if (node.left) dfsSet(node.left);
    if (node.right) dfsSet(node.right);
    queue.push(node.val)
       res.push(queue);
       queue = [];
return res
}


console.log(dfsSet(root))