// 3. Find sum of all even numbers between 1 and 100.

function sumEvenNumbers() {
    let sum = 0;
    
    for (let i = 2; i <= 100; i += 2) {
        sum += i;
    }
    
    return sum;
}

console.log(`Sum of even numbers from 1 to 100 is: ${sumEvenNumbers()}`);