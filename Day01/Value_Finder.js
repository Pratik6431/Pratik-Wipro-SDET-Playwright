//Given let numbers = [10, 20, 30, 40, 50], write a line of code that checks if the number 30 exits in the array (returning true or false ) and another line to find the index of the number

let numbers = [10, 20, 30, 40, 50];

let exists = numbers.includes(30);

let position = numbers.indexOf(30);

console.log("Does 30 exist?", exists);
console.log("What is the index?", position);