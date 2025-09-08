// Question 2: decoding string pattern

// input: 3[a]2[ab]
// output: aaaabab

const solver = (str) => {
    let stack = []
    let currNum = 0;
    let currentStr = ""
    
  for(ch of str){ 
        if (/\d/.test(ch)) {
            currNum = currNum * 10 + Number(ch);     
        } else if (ch === "[") {
            stack.push(currentStr)
            stack.push(currNum);
            currentStr = "";
            currNum = 0;
        } else if (ch === "]") {
            let repeatCount = stack.pop()
            let str = stack.pop()
            currentStr=str+currentStr.repeat(repeatCount)
        } else {
             currentStr+=ch
        }
        
    }


    return currentStr
}

console.log("output :",solver("3[a]2[ab]"))