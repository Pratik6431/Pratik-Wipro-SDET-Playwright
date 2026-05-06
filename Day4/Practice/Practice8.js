function getData() {

    return new Promise((resolve, reject) => {

        if(2 > 3) {
            setTimeout(() => { resolve("Data received"); }, 2000);
        } else { reject('not working') }
    });
}


fetch("https://jsonplaceholder.typicode.com/comments")

    .then(res => res.json())
    .then(data => data.filter(c => c.email.endsWith(".biz")))
    .then(data => data.map(c => (c.name = "Pratik Biz User: " + c.name)))
    .then(data => console.log("Example 9 Result:", data.slice(0, 5)))
    .catch(error => console.error("Error:", error));

setTimeout(() => { console.log("Data received"); }, 5000);
console.log("test");

setInterval(() => { console.log("Checking for new data..."); }, 3000);