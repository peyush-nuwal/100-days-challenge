//  creating node
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  add(val) {
    let newNode = new Node(val);

    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
      this.length++;
    } else {
      this.last.next = newNode;
      this.last = newNode;
      this.length++;
    }
    return newNode.val;
  }

  dequeue() {
    if (this.length === 0) return null;

    const delNode = this.first;
    this.first = this.first.next;
    this.length--;

    if (this.length === 0) {
      this.last = null; // important cleanup
    }

    return delNode.val; // return value, not node
  }
}
const q = new Queue()

console.log("adding element in queue",q.add(1))
console.log("adding element in queue", q.add(2))
console.log("adding element in queue", q.add(3))
console.log("adding element in queue", q.add(4))
console.log("adding element in queue", q.add(5))
console.log("printing queue",q)
console.log("delete first in queue", q.dequeue())
console.log("printing queue after delete",q)