async function getUnis() {
    let res = await fetch("http://universities.hipolabs.com/search?country=United+States");
    let data = await res.json();
    return data.slice(0, 50).filter(u => u.name.includes("New York")).map(u => u.name = "Pratik " + u.name);
}

getUnis().then(data => console.log("Example 5:", data));

const t5 = setTimeout(() => { console.log("Data received"); }, 5000);
console.log("test");
clearTimeout(t5);

const i5 = setInterval(() => { console.log("Checking for new data..."); }, 3000);
clearInterval(i5);