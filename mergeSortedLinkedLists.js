function ListNode(val) {
  this.val = val;
  this.next = null;
}

function mergeList(list1, list2) {
  const dummy = new ListNode(0);
  let current = dummy;

  while (list1 !== null && list2 !== null) {
    if (list1.val < list2.val) {
      current.next = list1;
      list1 = list1.next;
    } else {
      current.next = list2;
      list2 = list2.next;
    }
    current = current.next; // move pointer
  }

  // Attach the remainder
  if (list1 !== null) {
    current.next = list1;
  } else {
    current.next = list2;
  }

  return dummy.next;
}

// Example usage:
let list1 = new ListNode(1);
list1.next = new ListNode(3);
list1.next.next = new ListNode(5);

let list2 = new ListNode(2);
list2.next = new ListNode(4);
list2.next.next = new ListNode(6);
list2.next.next.next = new ListNode(7);
list2.next.next.next.next = new ListNode(8);

let merged = mergeList(list1, list2);

// Print merged list
let result = [];
while (merged !== null) {
  result.push(merged.val);
  merged = merged.next;
}
console.log(result); // [1,2,3,4,5,6]
