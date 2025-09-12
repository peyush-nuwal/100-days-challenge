
// Creating doubly linkedList

// Node
class Node {
  constructor(val, ) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}



class LinkedList{
    constructor(val) {

        const newNode=new Node(val);
        this.head = newNode;
        this.tail = this.head
        this.length=1
    }    
    
    add(val) {

        const newNode = new Node(val)
        
        if (!this.head) {
            this.head=newNode
             this.tail = newNode;
             
        }
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail=newNode
        this.length++;

        return this
    }

    printList() {
         let current= this.head

        let res = []
        
        while (current) {
            res.push(current.val)
            current=current.next
        }
        return res.join("->")       
    }
    
    pop() {
         if (this.length === 0) return undefined;

        let poppedNode = this.tail;
        
           if (this.length === 1) {
             // only one node
             this.head = null;
             this.tail = null;
           } else {
             this.tail = poppedNode.prev;
             this.tail.next = null;
             poppedNode.prev = null; // break reference
        }
        
        
    this.length--;
    return poppedNode;
    }
    
}


const list = new LinkedList(1)
console.log("adding element", list.add(2));
console.log("adding element", list.add(3));
console.log("adding element", list.add(4));

console.log("list",list.printList())
console.log("list",list.pop())
console.log("after deleting",list.printList())
