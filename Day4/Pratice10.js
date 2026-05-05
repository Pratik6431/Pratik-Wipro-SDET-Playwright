function getData() {

    return new Promise((resolve, reject) => {
        
        if(2 > 3) {
            setTimeout(() => { resolve("Data received"); }, 2000);
        } else { reject('not working') }
    });
}


fetch("https://fakestoreapi.com/products")

    .then(res => res.json())
    .then(data => data.filter(item => item.price < 50))
    .then(data => data.map(item => (item.title = "Pratik Sale: " + item.title)))
    .then(data => console.log("Example 2 Result:", data))
    .catch(error => console.error("Error:", error));

setTimeout(() => { console.log("Data received"); }, 5000);
console.log("test");

setInterval(() => { console.log("Checking for new data..."); }, 3000);