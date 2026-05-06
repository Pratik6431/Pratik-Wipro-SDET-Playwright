async function getComments() {
    let res = await fetch("https://jsonplaceholder.typicode.com/comments");
    let data = await res.json();
    return data.filter(c => c.id < 15).map(c => c.email = "Pratik_" + c.email);
}

getComments().then(data => console.log("Example 9:", data));

const t9 = setTimeout(() => { console.log("Data received"); }, 5000);
console.log("test");
clearTimeout(t9);

const i9 = setInterval(() => { console.log("Checking for new data..."); }, 3000);
clearInterval(i9);