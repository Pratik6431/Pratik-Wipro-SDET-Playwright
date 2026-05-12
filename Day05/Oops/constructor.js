class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(`${this.name} makes a sound.`);
    }
}

const dog = new Animal("Johnny");
const cat = new Animal("Whiskers");

dog.speak();
cat.speak();

// Explanation of the above code:
// We have defined a class called Animal with a constructor that takes a name parameter and 
// assigns it to the name property of the object. The class also has a method called speak that
//  prints a message to the console using the name property. We then create two instances of 
// the Animal class, dog and cat, and call the speak method on each instance to see the output.