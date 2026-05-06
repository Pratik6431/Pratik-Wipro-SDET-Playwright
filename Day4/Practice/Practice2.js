function getData() {

    return new Promise((resolve, reject) => {
        
        if(2 > 3) {
            setTimeout(() => { resolve("Data received"); }, 2000);
        } else { reject('not working') }
    });
}


fetch("https://jsonplaceholder.typicode.com/posts")

    .then(res => res.json())
    .then(data => data.filter(post => post.id <= 10))
    .then(data => data.map(post => (post.title = "Pratik Post: " + post.title)))
    .then(data => console.log("Example 3 Result:", data))
    .catch(error => console.error("Error:", error));

setTimeout(() => { console.log("Data received"); }, 5000);
console.log("test");

setInterval(() => { console.log("Checking for new data..."); }, 3000);