// 5. Write a program that takes a user’s birth year and calculates age

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const currentYear = new Date().getFullYear();

rl.question('Enter you birth year: ', (birthYear) => {
  const age = currentYear - parseInt(birthYear);

  console.log(`Your age is ${age} years.`);
  
  rl.close();
});