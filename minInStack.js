import { stack } from "./stack.js";


function minVal(stack) {
    let current = stack
    let maxValue = 0
    
    while (current) {
        console.log(current.start);
        maxValue = Math.max(maxValue, current.start.val);
        current = current.start.next;
    }
    return maxValue;
}
console.log(minVal(stack));