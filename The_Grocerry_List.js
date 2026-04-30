// Create an array called cart with three items. Write code to add "Milk" to the end, "Eggs" to the beginning, and then remove the very last item you just added in js


let cart = ["Bread", "Apple", "Cheese"];

cart.push("Milk");

cart.unshift("Eggs");

cart.pop();

console.log(cart); 