function getData() {

    return new Promise((resolve, reject) => {

        if(2 > 3) {
            setTimeout(() => { resolve("Data received"); }, 2000);
        } else { reject('not working') }
    });
}


fetch("https://jsonplaceholder.typicode.com/users")

    .then(res => res.json())
    .then(data => data.filter(u => u.address.city.length > 5))
    .then(data => data.map(u => (u.name = "Pratik Verified: " + u.name)))
    .then(data => console.log("Example 10 Result:", data))
    .catch(error => console.error("Error:", error));

setTimeout(() => { console.log("Data received"); }, 5000);
console.log("test");

setInterval(() => { console.log("Checking for new data..."); }, 3000);