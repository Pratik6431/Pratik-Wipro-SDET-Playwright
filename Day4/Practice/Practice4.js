function getData() {

    return new Promise((resolve, reject) => {

        if(2 > 3) {
            setTimeout(() => { resolve("Data received"); }, 2000);
        } else { reject('not working') }
    });
}


fetch("https://api.openbrewerydb.org/v1/breweries")

    .then(res => res.json())
    .then(data => data.filter(b => b.brewery_type === "micro"))
    .then(data => data.map(b => (b.name = "Pratik Micro: " + b.name)))
    .then(data => console.log("Example 5 Result:", data))
    .catch(error => console.error("Error:", error));

setTimeout(() => { console.log("Data received"); }, 5000);
console.log("test");

setInterval(() => { console.log("Checking for new data..."); }, 3000);