// -----------------------------
// Node class for Linked List
// -----------------------------
class Node {
  constructor(val) {
    this.val = val; // Value stored in the node
    this.next = null; // Pointer to the next node
  }
}

// -----------------------------
// LinkedList class
// -----------------------------
class LinkedList {
  constructor() {
    this.head = null; // Initially empty
  }

  // Insert a value at the end of the list
  insert(val) {
    const newNode = new Node(val);

    // If list is empty, new node becomes head
    if (!this.head) {
      this.head = newNode;
      return this;
    }

    // Otherwise, traverse to the end
    let current = this.head;
    while (current.next) {
      current = current.next;
    }

    // Add new node at the end
    current.next = newNode;
    return this;
  }

  // Print linked list values
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
// Function: Swap nodes in pairs
// -----------------------------
// Example: 1 → 2 → 3 → 4 becomes 2 → 1 → 4 → 3
const swapPair = (head) => {
  let dummy = new Node(0); // Dummy node before head
  dummy.next = head; // Attach dummy to head
  let prev = dummy;

  // Traverse while at least 2 nodes remain
  while (prev.next && prev.next.next) {
    let first = prev.next; // First node in the pair
    let second = first.next; // Second node in the pair

    // Swap operation
    first.next = second.next;
    second.next = first;
    prev.next = second;

    // Move prev pointer forward for next swap
    prev = first;
  }

  return dummy.next; // Return new head
};

// -----------------------------
// TEST CASE
// -----------------------------
// Question: Given a sorted linked list (1 → 2 → 3 → 4),
// after swapping every two adjacent nodes, what is the output?

// Step 1: Create linked list
const list = new LinkedList();
list.insert(1);
list.insert(2);
list.insert(3);
list.insert(4);

console.log("Original list:");
list.printList(); // Expected: 1 → 2 → 3 → 4

// Step 2: Apply swapPair
list.head = swapPair(list.head);

console.log("List after swapping pairs:");
list.printList(); // Expected: 2 → 1 → 4 → 3
