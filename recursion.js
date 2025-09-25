// Recursion 
// when function call itself but each time the function call is not same



const factorial = (num) => {
  if (num < 0) throw new Error("Factorial not defined for negative numbers");
  if (num === 0) return 1;
  return num * factorial(num - 1);
};

console.log(factorial(5))


const fib = (n) => {
    if (n === 0) return 0;
    if (n === 1) return 1;

    return fib(n - 1) + fib(n - 2);
}

console.log(fib(6)); // 8
