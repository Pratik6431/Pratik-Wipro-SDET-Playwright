// 5. Create a number guessing game using loops.

const prompt = require('prompt-sync')();

function numberGuessingGame() {
    const targetNumber = Math.floor(Math.random() * 10) + 1;
    let guess = 0;
    let attempts = 0;
    
    console.log("Welcome to the Number Guessing Game! (1-10)");

    while (guess !== targetNumber) {
        let input = prompt("Guess a number between 1 and 10: ");
        
        if (input.toLowerCase() === 'exit') {
            console.log("Game cancelled.");
            break;
        }

        guess = parseInt(input);
        attempts++;

        if (isNaN(guess)) {
            console.log("Please enter a valid number.");
        } else if (guess < targetNumber) {
            console.log("Too low! Try again.");
        } else if (guess > targetNumber) {
            console.log("Too high! Try again.");
        } else if (guess === targetNumber) {
            console.log(`Congratulations! You guessed it in ${attempts} attempts.`);
        } 
    }
}

numberGuessingGame();