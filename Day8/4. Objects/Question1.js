// 1. Create an object for a student and display all properties dynamically.

const student = {
    name: "Pratik",
    age: 22,
    degree: "ECE",
    graduated: true
};

for (let key in student) {
    
    console.log(`${key}: ${student[key]}`);
}