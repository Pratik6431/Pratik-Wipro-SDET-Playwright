function getData() {

    return new Promise((resolve, reject) => {
        if(2 > 3) {
            setTimeout(() => { resolve("Data received"); }, 2000);
        } else { reject('not working') }
    });
}


fetch("http://universities.hipolabs.com/search?country=United+States")

    .then(res => res.json())
    .then(data => data.filter(uni => uni.name.includes("New York")))
    .then(data => data.map(uni => (uni.name = "Pratik University: " + uni.name)))
    .then(data => console.log("Example 6 Result:", data.slice(0, 5)))
    .catch(error => console.error("Error:", error));

setTimeout(() => { console.log("Data received"); }, 5000);
console.log("test");

setInterval(() => { console.log("Checking for new data..."); }, 3000);