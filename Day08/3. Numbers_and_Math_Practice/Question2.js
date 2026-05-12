// 2. Check whether a number is prime.

function isPrime(num) {
    
    if (num < 2) return false;
    
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    
    return true;
}

console.log(isPrime(7));  // O/p : true
console.log(isPrime(10)); // O/p : false