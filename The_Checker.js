// Write a function in javascript  that takes one input and console.log's a message saying  
// "This is a number" or "This is a String" based on the data type provided

function DataTypeCheck(input) {
    if (typeof input === "number") {
    console.log("This is a number");
  } else if (typeof input === "string") {
    console.log("This is a String");
  } else {
    console.log("This is something else!");
  }
}

DataTypeCheck(42);
DataTypeCheck("Pratik");