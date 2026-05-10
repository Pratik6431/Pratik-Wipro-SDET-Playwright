//  Create a program that swaps two numbers without using a third variable.

let a = 5;
let b = 10;
console.log(`Before swapping: a = ${a}, b = ${b}`);

a = a + b; // a now holds the sum of a and b
b = a - b; // b now holds the original value of a
a = a - b; // a now holds the original value of b

console.log(`After swapping: a = ${a}, b = ${b}`);