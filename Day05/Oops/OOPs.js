// -> OOPs in JavaScript
// -> OOPs stands for Object Oriented Programming Ssytem. It is a programming paradigm that uses 
// objects and classes to organize code and data.
// -> In JavaScript, we can create objects using object literals, constructor functions, and classes.

// -> Object Literals -> Object literals are a simple way to create objects in JacaScript.
//  We can define an object using curly braces {} and assign properties and methods to it.

// Ecample of Object Literals
let person = {
    name: "John",
    age = 30,
    greet: function() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

// Explanation of the above code:
// We have created an object called person using object literals. The object has two properties,
//  name and age, and a method called greet. The greet method uses the this keyword to access 
// the properties of the object and print a greeting message to the console.
