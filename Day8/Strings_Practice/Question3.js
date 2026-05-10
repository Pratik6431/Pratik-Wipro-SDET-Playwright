// 3. Check whether a string is a palindrome.

function isPalindrome(str) {
    
    const cleanStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    
    const reversedStr = cleanStr.split('').reverse().join('');
    
    return cleanStr === reversedStr;
}

console.log(isPalindrome("level")); // O/p: true
console.log(isPalindrome("Hello")); // O/p: false
console.log(isPalindrome("madam")); // O/p: true