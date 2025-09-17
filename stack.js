class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.start = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);
    newNode.next = this.start;
    this.start = newNode;
    this.length++;
    return this.length;
  }

  pop() {
    if (this.length === 0) return null;
    const removed = this.start;
    this.start = this.start.next;
    this.length--;
    return removed.val;
  }

  peek() {
    return this.start ? this.start.val : null;
  }

  isEmpty() {
    return this.length === 0;
  }

  size() {
    return this.length;
  }

  clear() {
    this.start = null;
    this.length = 0;
  }

  toArray() {
    let arr = [];
    let current = this.start;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    return arr;
  }
}

// Demo
const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);

console.log("Top:", stack.peek()); // 30
console.log("Stack:", stack.toArray()); // [30, 20, 10]
console.log("Pop:", stack.pop()); // 30
console.log("Size:", stack.size()); // 2
console.log("Is empty?", stack.isEmpty()); // false
stack.clear();
console.log("After clear:", stack.isEmpty()); // true
