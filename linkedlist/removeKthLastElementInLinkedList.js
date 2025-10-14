function ListNode(val,next) {
     this.val= val??null
     this.next= next??null
}

const removeKthElement = (head, k)=>{
    if (!head) return null
    let dummy = new ListNode(0, head)
    let fast= dummy
    let slow= dummy

    for (let i = 0; i <= k; i++){
        fast= fast.next
    }

    while (fast) {
        fast=fast.next
        slow= slow.next
    }
    slow.next = slow.next.next
    

    return dummy.next
}

const head= new ListNode(1)
 head.next= new ListNode(2)
 head.next.next= new ListNode(3)
 head.next.next.next= new ListNode(4)
head.next.next.next.next = new ListNode(5)
 
console.log(removeKthElement(head,4))