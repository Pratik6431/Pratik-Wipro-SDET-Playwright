async function getUsers() {
    let res = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await res.json();
    return data.filter(u => u.id % 2 === 0).map(u => u.username = "Pratik_" + u.username);
}

getUsers().then(data => console.log("Example 10:", data));

const t10 = setTimeout(() => { console.log("Data received"); }, 5000);
console.log("test");
clearTimeout(t10);

const i10 = setInterval(() => { console.log("Checking for new data..."); }, 3000);
clearInterval(i10);