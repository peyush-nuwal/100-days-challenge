// -----------------------------
// Question:
// Given a sorted linked list, delete all duplicates such that
// each element appears only once.
//
// Example:
// Input:  1 → 1 → 2 → 3 → 3
// Output: 1 → 2 → 3
// -----------------------------

// Node class
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// LinkedList class
class LinkedList {
  constructor() {
    this.head = null;
  }

  // Insert node at the end
  insert(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      return this;
    }

    let current = this.head;
    while (current.next) {
      current = current.next;
    }

    current.next = newNode;
    return this;
  }

  // Print the linked list
  printList() {
    let current = this.head;
    let result = "";
    while (current) {
      result += current.val + (current.next ? " → " : "");
      current = current.next;
    }
    console.log(result);
  }
}

// -----------------------------
// Function to delete duplicates
// Implement your solution here
// -----------------------------
const deleteDuplicates = (head) => {
    let curr = head
    while (curr && curr.next) {
        if (curr.val === curr.next.val) {
            curr.next=curr.next.next
        } else {
            curr=curr.next
        }
    }
  return head;
};

// -----------------------------
// Test Cases
// -----------------------------
const list1 = new LinkedList();
list1.insert(1);
list1.insert(1);
list1.insert(2);
list1.insert(3);
list1.insert(3);

console.log("Original list:");
list1.printList();

list1.head = deleteDuplicates(list1.head);

console.log("After removing duplicates:");
list1.printList();

// Edge Case: No duplicates
const list2 = new LinkedList();
list2.insert(1);
list2.insert(2);
list2.insert(3);

console.log("\nOriginal list:");
list2.printList();

list2.head = deleteDuplicates(list2.head);

console.log("After removing duplicates:");
list2.printList();

// Edge Case: All duplicates
const list3 = new LinkedList();
list3.insert(1);
list3.insert(1);
list3.insert(1);

console.log("\nOriginal list:");
list3.printList();

list3.head = deleteDuplicates(list3.head);

console.log("After removing duplicates:");
list3.printList();
