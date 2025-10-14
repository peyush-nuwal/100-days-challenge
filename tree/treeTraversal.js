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


const bfs = (root) => {
  if (!root) return null;
  const queue = [];
  const res = [];
  let current = root;

  queue.push(current);
  while (queue.length) {
    current = queue.shift();

    res.push(current.val);

    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }

  return res;
};

console.log(bfs(root));
