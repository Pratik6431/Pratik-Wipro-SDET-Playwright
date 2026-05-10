function person(name) {
    this.name = name;

}

person.prototype.sayHi = function() {
    console.log('hello ' + this.name);
}
const me = new person("Pratik");
const you = new person("you");
me.sayHi();
you.sayHi();
console.log(Object.getPrototypeOf(me) === person.prototype);
console.log(me.sayHi === you.sayHi);

// Prototype is a mechanism in JavaScript that allows objects to inherit properties and methods from\
// other objects. Every JavaScript object has a prototype, which is another object that it inherits from.
// When you try to access a property or method on an object, JavaScript first looks for it on the object
// itself. If it doesn't find it there, it looks for it on the object's prototype, and so on up the
// prototype chain until it finds the property or method or reaches the end of the chain (null).
// This allows for efficient memory usage and code reuse, as multiple objects can share the same
// properties and methods defined on their prototype.