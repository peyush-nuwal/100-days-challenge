
// Question 1: solving a expression using eval()

// input: "(3+2)*7/2-5"
// output:


const method1 = (exp) => {
    return eval(exp)
}

console.log("output :",method1("(3+2)*7/2-5"))


// Question 1: solving a expression without eval()

// input: "3+2*7/2-5"
// output:

const method2 = (exp) => {
    const stack = []
    let ope = "+"
    let digi = 0
    
    for (let i = 0; i < exp.length; i++){
         let current=exp[i] 
        if (/\d/.test(current)) {
            digi = digi * 10 + Number(current)

        }

        if (/[+\-*\/]/.test(current) || i === exp.length - 1) {
         
            switch (ope) {
                case "+":
                    stack.push(digi)
                    break;
                case "-":
                    stack.push(-digi);
                    break;
                case "*":
                    stack.push(stack.pop() * digi)
                    break;
                case "/":
                     stack.push(Math.trunc(stack.pop() / digi))
                    break;
            } 
            ope=current
            digi = 0
        }
        
    }

    return stack.reduce((acc, curr) => acc + curr, 0)
}

console.log("output :", method2("3+2*7/2-5"))