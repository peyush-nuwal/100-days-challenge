
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
    
    
}


const list = new LinkedList(1)
console.log("adding element", list.add(2));
console.log("adding element", list.add(3));
console.log("adding element", list.add(4));

console.log("list",list.printList())
