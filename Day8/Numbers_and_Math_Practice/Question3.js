// 3. Find factorial of a number using loops.

function findFactorial(num) {
    if (num < 0) return "Factorial is not defined for negative numbers";
    if (num === 0 || num === 1) return 1;
    
    let factorial = 1;
    
    for (let i = 2; i <= num; i++) {
        factorial *= i;
    }
    
    return factorial;
}

console.log(findFactorial(5)); // O/p : 120
console.log(findFactorial(0)); // O/p : 1