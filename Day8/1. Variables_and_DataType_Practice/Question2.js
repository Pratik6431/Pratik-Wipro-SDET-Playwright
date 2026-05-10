//  Write a program to check whether a given value is a number, string, boolean, null, or undefined. 

let value1 = 42;
let value2 = "Hello, World!";
let value3 = true;
let value4 = null;
let value5;

function checkDataType(value) {
    if (typeof value === 'number') {
        console.log(`${value} is a number.`);
    } else if (typeof value === 'string') {
        console.log(`${value} is a string.`);
    } else if (typeof value === 'boolean') {
        console.log(`${value} is a boolean.`);
    } else if (typeof value === 'object' && value === null) {
        console.log(`${value} is null.`);
    } else if (typeof value === 'undefined') {
        console.log(`${value} is undefined.`);
    } else {
        console.log(`${value} is of an unknown type.`);
    }

}
checkDataType(value1);
checkDataType(value2);
checkDataType(value3);
checkDataType(value4);
checkDataType(value5);