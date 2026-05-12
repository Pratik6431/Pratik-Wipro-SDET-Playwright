function getData() {

    return new Promise((resolve, reject) => {

        if(2 > 3) {
            setTimeout(() => { resolve("Data received"); }, 2000);
        } else { reject('not working') }
    });
}


fetch("https://official-joke-api.appspot.com/jokes/ten")

    .then(res => res.json())
    .then(data => data.filter(j => j.type === "general"))
    .then(data => data.map(j => (j.setup = "Pratik Joke: " + j.setup)))
    .then(data => console.log("Example 7 Result:", data))
    .catch(error => console.error("Error:", error));

setTimeout(() => { console.log("Data received"); }, 5000);
console.log("test");

setInterval(() => { console.log("Checking for new data..."); }, 3000);