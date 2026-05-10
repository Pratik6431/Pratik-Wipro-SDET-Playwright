// 4. Write a function that accepts an array and returns only even numbers.

function getEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
}

const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = getEvenNumbers(numbers);
console.log(evenNumbers);