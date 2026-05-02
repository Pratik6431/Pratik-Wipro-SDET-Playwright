// Question 1: The Guest List Formatter
//Goal: Practice Template Literals and Array Methods.
// Write a function called formatGuests that takes an array of names. The function should:
// Remove the first name from the list (it’s the host, not a guest).
// Add "Guest: " before each remaining name using .map().
// Return a single string where each guest is on a new line.
 
 function formatGuests(names) {
    const guestsOnly = names.slice(1);
    const formattedArray = guestsOnly.map(name => {return `Guest: ${name}`});
    return formattedArray.join('\n');
 }
 const inviotationList = ["Pratik", "Nitish", "Adil", "Shivam"];
 console.log(formatGuests(inviotationList));