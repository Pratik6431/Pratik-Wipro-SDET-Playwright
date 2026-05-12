// 5. Merge two arrays and remove duplicates.

function mergeAndRemoveDuplicates(arr1, arr2) {
    
    return [...new Set([...arr1, ...arr2])];
}

const array1 = [1, 2, 3, 4];
const array2 = [3, 4, 5, 6];

console.log(mergeAndRemoveDuplicates(array1, array2));