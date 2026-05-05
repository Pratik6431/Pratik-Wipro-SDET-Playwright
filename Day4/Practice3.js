function getData() {

    return new Promise((resolve, reject) => {

        if(2 > 3) {
            setTimeout(() => { resolve("Data received"); }, 2000);
        } else { reject('not working') }
    });
}


fetch("https://dog.ceo/api/breeds/list/all")

    .then(res => res.json())
    .then(data => Object.keys(data.message))
    .then(data => data.filter(breed => breed.startsWith('b')))
    .then(data => data.map(breed => (breed = "Pratik Breed: " + breed)))
    .then(data => console.log("Example 4 Result:", data))
    .catch(error => console.error("Error:", error));

setTimeout(() => { console.log("Data received"); }, 5000);
console.log("test");

setInterval(() => { console.log("Checking for new data..."); }, 3000);