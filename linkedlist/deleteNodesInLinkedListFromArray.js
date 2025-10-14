
function ListNode(val = null, next = null) {
    this.val = val 
    this.next= next

}
 
//  list1 

const list1= new ListNode(1)
list1.next =new ListNode(2)
list1.next.next = new ListNode(3);
list1.next.next.next = new ListNode(4);
list1.next.next.next.next = new ListNode(5);





function modifyList(head, nums) {
    if (!head) return null 
    
    let max = -1
     
    // getting the maxium num 
    for (let num of nums) {
        max = num>max ? num : max 
    }


    let freq = new Array(max - 1).fill(false);

    for(let num of nums)freq[num]=true
    
    let temp = new ListNode();

    let current = temp;
   
    while (head !== null) {
        if (head.val >= freq.length || freq[head.val] === false) {
            current.next = head 
            current= current.next
        }
        head=head.next
    }
     current.next = null;
     return temp.next;
}

console.log(modifyList(list1,[1,2,3]));