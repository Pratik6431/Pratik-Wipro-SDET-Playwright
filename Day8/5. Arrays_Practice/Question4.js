// 4. Find second largest number in an array.

function findSecondLargest(arr) {
    let largest = -Infinity;
    let secondLargest = -Infinity;

    for (let num of arr) {
        if (num > largest) {
            
            secondLargest = largest;
            
            largest = num;
        } else if (num > secondLargest && num < largest) {
            
            secondLargest = num;
        }
    }

    return secondLargest === -Infinity ? "No second largest exists" : secondLargest;
}

console.log(findSecondLargest([10, 5, 10, 20, 15]));
console.log(findSecondLargest([5, 5, 5]));
