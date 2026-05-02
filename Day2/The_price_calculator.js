//Goal: Practice Type Conversion and splice.
// You have an array of prices, but they are currently strings. Write a script that:
// Removes the last item in the array using an array method (because it's a "handling fee" you want to calculate separately).
// Converts the remaining string prices into actual numbers.
// Calculates the sum of those numbers using an arrow function.
// Prints: "Total Price: $[sum]" using a template literal.
 
const prices = ["10.50", "20.00", "5.25", "15.75", "0.00"];
prices.pop();

const numericPrices = prices.map(price => parseFloat(price));

let sum = 0;
numericPrices.forEach(price => sum += price);

console.log(`Total Price: $${sum}`);
