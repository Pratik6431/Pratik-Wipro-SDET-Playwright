async function getCrypto() {
    let res = await fetch("https://api.coindesk.com/v1/bpi/currentprice.json");
    let data = await res.json();
    let prices = Object.values(data.bpi);
    return prices.filter(p => p.rate_float > 1000).map(p => p.code = "Pratik Coin: " + p.code);
}

getCrypto().then(data => console.log("Example 7:", data));

const t7 = setTimeout(() => { console.log("Data received"); }, 5000);
console.log("test");
clearTimeout(t7);

const i7 = setInterval(() => { console.log("Checking for new data..."); }, 3000);
clearInterval(i7);