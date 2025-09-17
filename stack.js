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
    
    
}

const stack = new Stack(1)
console.log("stack",stack)