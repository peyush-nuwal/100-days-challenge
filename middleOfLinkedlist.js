function ListNode(val) {
  this.val = val;
  this.next = null;
}
let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);


function getMiddleOfLinkedList(head) {
    let slow = head
    let fast = head
    while (fast && fast.next) {
        slow = slow.next
        fast=fast.next.next
    }
    return slow
}

console.log(getMiddleOfLinkedList(head))