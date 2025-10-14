// Node class for Doubly Linked List
class Node {
  constructor(val) {
    this.val = val; // data stored in node
    this.next = null; // pointer to next node
    this.prev = null; // pointer to previous node
  }
}

class LinkedList {
  constructor(val) {
    // Create first node
    const newNode = new Node(val);
    this.head = newNode; // head points to first node
    this.tail = newNode; // tail also points to first node
    this.length = 1; // initial length is 1
  }

  // Add at the END (push)
  add(val) {
    const newNode = new Node(val);

    if (!this.head) {
      // Empty list → new node is both head & tail
      this.head = newNode;
      this.tail = newNode;
    } else {
      // Connect new node after tail
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode; // update tail
    }

    this.length++;
    return this; // return whole list for chaining
  }

  // Add at the START (unshift)
  shift(val) {
    const newNode = new Node(val);

    if (this.length === 0) {
      // Empty list → new node is both head & tail
      this.head = newNode;
      this.tail = newNode;
    } else {
      // Insert before current head
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode; // update head
    }

    this.length++;
    return this; // return whole list for chaining
  }

  // Remove from END (pop)
  pop() {
    if (this.length === 0) return undefined;

    let poppedNode = this.tail;

    if (this.length === 1) {
      // Only one node → reset list
      this.head = null;
      this.tail = null;
    } else {
      // Move tail backward
      this.tail = poppedNode.prev;
      this.tail.next = null;
      poppedNode.prev = null; // break reference
    }

    this.length--;
    return poppedNode; // return removed node
  }
    // Remove from start
    unShift() {
      if (this.length === 0) return undefined;

        let removedNode = this.head;
        
      if (this.length === 1) {
        this.head = null;
        this.tail = null;
      } else {
        this.head = removedNode.next;
        this.head.prev = null;
        removedNode.next = null;
      }

      this.length--;
      return removedNode
    }
   
    deleteByIndex(idx) {
          if (idx < 0 || idx >= this.length) return undefined;

          let count = 0;
          let current = this.head;
          let deleteNode;
         while (current) {
           if (count === idx) {
             deleteNode = current;

             // Case 1: Deleting head
             if (current === this.head) {
               this.head = current.next
               if(this.head) this.head.prev=null
            }
             // Case 2: Deleting tail
             else if (current === this.tail) {
               this.tail = current.prev;
               if (this.tail) this.tail.next = null;
             }
             // Case 3: Middle node
             else {
               current.prev.next = current.next;
               current.next.prev = current.prev;
             }

             // Cleanup
             current.next = null;
             current.prev = null;

             this.length--;
             break;
           }

           current = current.next;
           count++;
         }

         return deleteNode;
    }
  // Print entire list in "a->b->c" format
  printList() {
    let current = this.head;
    let res = [];

    while (current) {
      res.push(current.val);
      current = current.next;
    }

    return res.join("->");
  }
}

// ----------------------------
// 🔥 Basic Operations
// ----------------------------
const list = new LinkedList(1); // Create list with first node (1)
list.add(2).add(3).add(4); // Add elements at end
console.log("Initial list:", list.printList()); // 1->2->3->4

list.shift(0); // Add element at start
console.log("After shift(0):", list.printList()); // 0->1->2->3->4

list.pop(); // Remove from end
console.log("After pop():", list.printList()); // 0->1->2->3

list.add(5); // Add at end again
console.log("After add(5):", list.printList()); // 0->1->2->3->5

list.unShift()
console.log("After unshift():", list.printList()); // 1->2->3->5


list.deleteByIndex(1)
console.log("After deleteByIndex():", list.printList()); // 1->2->3->5
