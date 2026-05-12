let a = "Pratik";
let b = "Nitish";
let c = "Adil"; // 3rd variable

let d = "Hello " + a + ", " + b + " and " + c + "!"; // Concatenation
// console.log(d);
let e = `Hello ${a}, ${b} and ${c}!`; // Template literals
let f = `The length of a is ${a.length * 2}`; // Using template literals to get length
// console.log(e);
// console.log(f);

function table(num) {
    let result = "";
    for (let i = 1; i <= 10; i++) {
        // console.log(num + " x " + i + " = " + (num * i)); // Using string concatenation
        result += `${num} x ${i} = ${num * i}\n`;
    }
    return result;
}

console.log(table(5)); // Displays the multiplication table for 5
function sum(a, b) {
     return a + b;
 }


// let sum1 = sum(5, 10);
let addn = (x, y) => x + y; // Arrow function for addition
console.log("Sum of 5 and 10:", addn(5, 10)); // 15

let arr = [1, 2, 3, 4, 5, "Pratik"];

// arr.filter(function(x) {
//     return typeof x === "number";
// }).map(function(y) {
//     return y * 2;
// }).forEach(function(abc) {
//     console.log("Element after * 2:", abc * 2);
// });

arr.filter(x => typeof x === "number").map(y => y * 2).forEach(abc => console.log("Element after * 2:", abc * 2));
// console.log(arr.find(x => x === "Aaryan1")); 
// Arrow function is represented by =>


console.log(Math.floor(Math.random() * 100) + 1);

let strnum = "13";
console.log(Number(strnum));
console.log(String(13));

let val = "0.10";
console.log(parseInt(val));
console.log(parseFloat(val));

// Array Functions

let animals =  ["cat", "dog", "elephant", "tiger", "lion"];

console.log(animals.length);
console.log(animals[3]);
console.log(animals[animals.length - 1]);
console.log(animals.indexOf("dog"));
console.log(animals.indexOf("monkey"));
console.log(animals.includes("tiger"));
console.log(animals.includes("monkey"));
animals.push("monkey");
console.log(animals);
animals.pop();
console.log(animals);
animals.unshift("giraffe");
console.log(animals);
animals.shift();
console.log(animals);


console.log(animals.splice(0, 1));
console.log(animals.splice(1, 2));
console.log(animals.splice(1, 3));

const prices = [10, 20, 30, 40]; // tasks: We have tofind the total of all elements

let s = 0;

for (let i = 0; i < prices.length; i++) {

    s += prices[i]; // s = s + prices[i]
}
console.log("Total:", s);

const total = prices.reduce((acc, curr) => { return acc + curr }, 0);

console.log(total);
// console.log("Sum:", s);

const fruitBasket = ['apple', 'banana', 'cherry', 'apple', 'apple', 'banana', 'pineapple'];
const tally = fruitBasket.reduce((acc, fruit) => {
    acc[fruit] = (acc[fruit] || 0) + 1;
    return acc;
}, {}); // intial value of acc is an empty object
console.log(tally);