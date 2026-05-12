//Give a variable let fullName = "John Doe", write a code to exact the first letter of the first
// name and the first letter of the last name to create the string "JD".

let fullName = "John Doe";
let nameParts = fullName.split(" "); 
let initials = nameParts[0][0] + nameParts[1][0];

console.log(initials);