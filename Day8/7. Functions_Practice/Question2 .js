// 2. Write a function to check whether a number is palindrome.

function isPalindrome(num) {
    const str = num.toString();
    const reversed = str.split('').reverse().join('');
    return str === reversed;
}

console.log(isPalindrome(121));