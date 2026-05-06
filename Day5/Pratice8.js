async function getQuotes() {
    let res = await fetch("https://type.fit/api/quotes");
    let data = await res.json();
    return data.slice(0, 20).filter(q => q.author !== null).map(q => "Pratik Wisdom: " + q.text);
}

getQuotes().then(data => console.log("Example 8:", data));

const t8 = setTimeout(() => { console.log("Data received"); }, 5000);
console.log("test");
clearTimeout(t8);

const i8 = setInterval(() => { console.log("Checking for new data..."); }, 3000);
clearInterval(i8);