async function getData() {
    const sum = 2 + 2;
    return await new Promise((resolve, reject) => {
        if(2 < 3) {
            setTimeout(() => {
                resolve("Data received");
            }, 2000);
        } else {
            reject('not working')
        }
    });
}

async function getCatData() {
    let data = await fetch("https://api.thecatapi.com/v1/images/0XYvRd7oD");
    data = await data.json();
    // Filtering and Mapping inside async function
    const filtered = [data].filter(cat => cat.height > 500);
    const mapped = filtered.map(cat => ({ ...cat, title: "Pratik Cat" }));
    return mapped;
}

getCatData().then(data => console.log("Example 1:", data));

const obj1 = { name: "Pratik", type: "Cat Lover" };
console.log(JSON.stringify(obj1)); 

const timeoutId1 = setTimeout(() => { console.log("Data received"); }, 5000);
console.log("test");
clearTimeout(timeoutId1);

const i1 = setInterval(() => { console.log("Checking for new data..."); }, 3000);
clearInterval(i1);