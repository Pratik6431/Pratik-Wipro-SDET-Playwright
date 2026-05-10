// 5. Check whether a number is Armstrong number.

function isArmstrongNumber(num) {

    const strNum = num.toString();
    const power = strNum.length;
    let sum = 0;
    
    for (let i = 0; i < power; i++) {
        let digit = parseInt(strNum[i]);
        sum += Math.pow(digit, power);
    }
    
    return sum === num;
}

console.log(isArmstrongNumber(153));  // O/p : true
console.log(isArmstrongNumber(9474)); // O/p : true
console.log(isArmstrongNumber(123));  // O/p : false