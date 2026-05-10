// 4. Print all prime numbers between 1 and 100.

function printPrimes() {
    const primes = [];
    
    for (let num = 2; num <= 100; num++) {
        let isPrime = true;
        
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }
        
        if (isPrime) {
            primes.push(num);
        }
    }
    
    console.log(primes.join(", "));
}

printPrimes();