/**
 * ❓ Problem: Remove Linked List Elements
 * Given the head of a linked list and an integer val,
 * remove all nodes from the list that have Node.val == val
 * and return the new head.
 */
//    input: [1, 2, 3, 4, 5, 5, 4], target=5 
// Definition for singly-linked list
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

// Utility: Create a linked list from array
function createLinkedList(arr) {
  const dummy = new ListNode(0);
  let current = dummy;

  for (let num of arr) {
    current.next = new ListNode(num);
    current = current.next;
  }
  return dummy.next;
}

// Utility: Print linked list
function printList(head) {
  let result = [];
  let current = head;
  while (current) {
    result.push(current.val);
    current = current.next;
  }
  console.log(result.join(" -> "));
}

// Main function: Remove elements
function removeElement(head, target) {
  const dummy = new ListNode(0, head);
  let current = dummy;

  while (current.next) {
    if (current.next.val === target) {
      current.next = current.next.next; // skip the node
    } else {
      current = current.next;
    }
  }
  return dummy.next;
}

// 🔹 Example Run
let head = createLinkedList([1, 2, 3, 4, 5, 5, 4]);

console.log("Original List:");
printList(head);

let newHead = removeElement(head, 5);

console.log("After removing 5:");
printList(newHead);
