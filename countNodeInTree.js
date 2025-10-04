
 

 // basic way
const countNode = (root) => {
    let count = 0
    
    function traversal(node) {
        if (node === null) return 
        traversal(node.left)
        count++
        traversal++
    }
    
    traversal(root)

    return count
}

