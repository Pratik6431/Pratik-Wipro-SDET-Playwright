// 1. Find the largest and smallest number in an array.

function findSmallestAndLargest(arr) {
    if (arr.length === 0) return "Array is empty";
    
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    
    return { min, max };
}

console.log(findSmallestAndLargest([4, 2, 9, 1, 5, 8]));