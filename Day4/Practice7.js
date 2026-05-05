function getData() {
    return new Promise((resolve, reject) => {
        if(2 > 3) {
            setTimeout(() => { resolve("Data received"); }, 2000);
        } else { reject('not working') }
    });
}

fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
    .then(res => res.json())
    .then(data => Object.values(data.bpi))
    .then(data => data.filter(c => c.rate_float > 1000))
    .then(data => data.map(c => (c.description = "Pratik Crypto: " + c.description)))
    .then(data => console.log("Example 8 Result:", data))
    .catch(error => console.error("Error:", error));

setTimeout(() => { console.log("Data received"); }, 5000);
console.log("test");
setInterval(() => { console.log("Checking for new data..."); }, 3000);