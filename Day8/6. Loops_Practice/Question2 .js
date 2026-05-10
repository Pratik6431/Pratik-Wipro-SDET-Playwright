// 2. Print multiplication tables from 1 to 10.

function printMultiplicationTables() {
    
    for (let i = 1; i <= 10; i++) {
        console.log(`\n--- Table of ${i} ---`);
        
        for (let j = 1; j <= 10; j++) {
            console.log(`${i} x ${j} = ${i * j}`);
        }
    }
}

printMultiplicationTables();