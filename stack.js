  class Node{
      constructor(val) {
          this.val = val
          this.next= null
     }
}
  

class Stack{
    constructor(val) {
        let newItem= new Node(val)
        this.start = newItem
       
        this.length=1
    }
    
    add(val) {
        const newItem = new Node(val)
        newItem.next = this.start
        this.start=newItem
       this.length++ 
   } 
}

const stack = new Stack(1)

console.log("stack adding 2",stack.add(2))
console.log("stack adding 2",stack.add(3))
console.log("printing stack",stack)