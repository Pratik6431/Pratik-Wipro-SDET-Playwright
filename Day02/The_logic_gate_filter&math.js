// Goal: Practice Arrow Functions, filter, and Math methods.
// Create an arrow function called getHighNumbers. It should take an array of mixed types (strings and numbers) and:
// Filter the array to keep only the numbers.
// Filter those numbers again to only keep ones greater than a random threshold between 1 and 50.
//Return the final array.

const getHighNumbers = (mixedArray) => {
    const threshold = Math.floor(Math.random() * 50) + 1;
    
    const numbersOnly = mixedArray.filter(item => {return typeof item === 'number'});

        const highNumbers = numbersOnly.filter(num => {return num > threshold;});

        return highNumbers;
    };

    const myData = [10, "Apple", 55, 2, "Banana", 42, 100, "Car", 15];
    console.log(getHighNumbers(myData));
