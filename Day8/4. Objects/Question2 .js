// 2. Count number of keys in an object.

const user = {
    id: 101,
    username: "pk_hansda",
    isActive: true,
    role: "admin"
};

const keyCount = Object.keys(user).length;

console.log(keyCount); // O/p : 4