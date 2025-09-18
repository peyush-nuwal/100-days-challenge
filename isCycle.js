/**
 * Question: Linked List Cycle
 *
 * Given the head of a linked list, return true if there is a cycle, 
 * otherwise return false.
 *
 * Example 1:
 * Input: head = [3,2,0,-4], pos = 1 → Output: true
 *
 * Example 2:
 * Input: head = [1,2], pos = 0 → Output: true
 *
 * Example 3:
 * Input: head = [1], pos = -1 → Output: false
 */


function ListNode(val) {
    this.val = val
    this.next=null

}

function createLinkedList(length) {
  if (length <= 0) return null;

  const head = new ListNode(1); // first node
  let current = head; // pointer to add next nodes

  for (let i = 2; i <= length; i++) {
    current.next = new ListNode(i); // create next node
    current = current.next; // move pointer
  }

  return head; // return head of the linked list
}

let list = new ListNode(1)
list.next=new ListNode(2)
list.next.next = new ListNode(3);
list.next.next.next = new ListNode(4);
list.next.next.next = new ListNode(5);
list.next.next.next.next = list.next 
 

const isCycle = (head) => {
    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        fast = fast.next.next
        slow = slow.next
        if (slow === fast) {
            return true
        }
    }
    return false
}



console.log("is cycle :",isCycle(list))