async function getJokes() {
    let res = await fetch("https://official-joke-api.appspot.com/jokes/ten");
    let data = await res.json();
    return data.filter(j => j.type === "general").map(j => "Pratik's Joke: " + j.setup);
}

getJokes().then(data => console.log("Example 6:", data));

const t6 = setTimeout(() => { console.log("Data received"); }, 5000);
console.log("test");
clearTimeout(t6);

const i6 = setInterval(() => { console.log("Checking for new data..."); }, 3000);
clearInterval(i6);