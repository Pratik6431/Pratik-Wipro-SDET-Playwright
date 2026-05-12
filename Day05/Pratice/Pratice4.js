async function getBreweries() {
    let res = await fetch("https://api.openbrewerydb.org/v1/breweries");
    let data = await res.json();
    return data.filter(b => b.brewery_type === "micro").map(b => ({ ...b, owner: "Pratik" }));
}

getBreweries().then(data => console.log("Example 4:", data));

const t4 = setTimeout(() => { console.log("Data received"); }, 5000);
console.log("test");
clearTimeout(t4);

const i4 = setInterval(() => { console.log("Checking for new data..."); }, 3000);
clearInterval(i4);