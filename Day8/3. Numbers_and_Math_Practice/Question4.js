// 4. Find Fibonacci series up to n numbers.

function generateFibonacci(n) {
    if (n <= 0) return [];
    if (n === 1) return [0];
    
    let fib = [0, 1];
    
    for (let i = 2; i < n; i++) {
        
        const nextNumber = fib[i - 1] + fib[i - 2];
        fib.push(nextNumber);
    }
    
    return fib;
}

console.log(generateFibonacci(7)); // O/p : [0, 1, 1, 2, 3, 5, 8]
console.log(generateFibonacci(3)); // O/p : [0, 1, 1]