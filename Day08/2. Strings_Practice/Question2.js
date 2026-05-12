// Count the number of vowels in a string.



function countVowelsRegex(str) {
    
    const matches = str.match(/[aeiou]/gi);
    
    return matches ? matches.length : 0;
}

console.log(countVowelsRegex("Pratik"));
console.log(countVowelsRegex("bcdfgh"));