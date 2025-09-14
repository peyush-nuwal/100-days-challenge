function ListNode(val) {
    this.val=val
     this.next=null
}


let l1 = new ListNode(7)
l1.next = new ListNode(0)
l1.next.next =new ListNode(8);

let l2 = new ListNode(4);
l2.next = new ListNode(7);
l2.next.next = new ListNode(5);


const sum = (l1, l2) => {
    let dummy = new ListNode(0)
    let current = dummy
    let carry = 0
    while (l1 !== null || l2 !== null || carry > 0) {
        let sum=carry
        if (l1) {
            sum += l1.val
            l1=l1.next
        }

           if (l2) {
             sum += l2.val;
             l2 = l2.next;
        }

        carry = Math.floor(sum/ 10)
        current.next=new ListNode(sum%10)
        current=current.next
        

    }

    return dummy.next
}

console.log(sum(l1,l2))