// Variables
const name = "Pratik";
let age = "23";
var month = "November";

console.log(name, age, month);

let city = "Indore";

// Lenth of string
console.log(city.length);

// Change to upperCase
console.log(city.toUpperCase());

// Change to lowercase -> toLowerCase()
console.log(city.toLowerCase());

// .includes() -> check if a string contains a specific substring or not by returning boolean values
console.log(city.includes("v"));

// .indexOf() -> returns the index of the first occurance of a specified value in a string. 
// If the value is not found, it returns -1.
console.log(city.indexOf("o"));

// .split() -> splits a string into an array of substrings based on a specified separator and returns 
// the new array.
console.log(city.split("I"));

// .trim() -> removes whitespace from both ends of a string and returns a new string without modifying
//  the original string.
let city2 = "  Indore  ";
console.log(city2.trim());

// .replace() -> replaces a specified value with another value in a string and returns a new string
// without modifying the original string.
console.log(city.replace("Indore", "Bhopal"));

// .charAt() -> returns the character at a specified index in a string.
console.log(city.charAt(0));

// .substring() -> returns a portion of a string between two specified indices.
console.log(city.substring(1, 4));

// Template literals -> allows you to embed expressions and variables within a string using backticks (`) and ${} syntax.
const greeting = `Hello, my name is ${name} and I am ${age} years old.`;
console.log(greeting);

const college = "HIT Haldia";
console.log(`Good evening everyone, I'am ${name} and I am studying in ${college}`);

// Math Object

// -> Math.random() -> generates a random number between 0 (inclusive) and 1 (exclusive).
console.log(Math.random());
console.log(Math.random() * 100);

// -> Math.floor() -> rounds a number down to the nearest integer.(Small value returned)
console.log(Math.floor(4.7));
console.log(Math.floor(4.9));
console.log(Math.floor(0.8));

// -> Math.ceil() -> rounds a number up to the nearest integer.(Large value returned)
console.log(Math.ceil(4.1));
console.log(Math.ceil(4.9));
console.log(Math.ceil(0.8));

// -> Math.round() -> rounds a number to the nearest integer. If the fractional part is 0.5 or greater, 
// it rounds up; otherwise, it rounds down.
console.log(Math.round(4.1));
console.log(Math.round(4.5));
console.log(Math.round(0.5));
console.log(Math.round(0.4));

// -> Math.max() -> returns the largest of zero or more numbers.
console.log(Math.max(4, 7, 1, 9, 3));

let firstName = "  Pratik  ";
let trimmedName = firstName.trim();
console.log(trimmedName);
let randomNumber = Math.random() * 100 + 1;
console.log(randomNumber);
console.log(`Generated ID: ${trimmedName}_${Math.floor(randomNumber)}`);

