// 3. Merge two objects into one.

const obj1 = { firstName: "John", age: 28 };

const obj2 = { lastName: "Doe", city: "New York" };

const mergedUsingSpread = { ...obj1, ...obj2 };

console.log(mergedUsingSpread); 