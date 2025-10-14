
function getSecondLargest(arr) {
    let maxVal = -Infinity
    let secMax = -Infinity
    
    for(num of arr) {
        if (num > maxVal) {
            
            secMax = maxVal
            maxVal= num
        }
        else if (num > secMax && maxVal) {
            secMax= num
        }
    }
return secMax
}
 

console.log(getSecondLargest([1,2,3,4,5]))