// 5. Find the longest word in a sentence.

function findLongestWordModern(str) {
    
    const words = str.split(" ");
    
    return words.reduce((longest, currentWord) => {
        
        return currentWord.length > longest.length ? currentWord : longest;
    }, "");
}

console.log(findLongestWordModern("Hii my name is Pratik, and I am from Bokaro_Steel_City"));
// O/p: Bokaro_Steel_City

console.log(findLongestWordModern("My Playwright training is going on")); 
// O/p: Playwright