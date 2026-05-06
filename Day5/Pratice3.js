async function getDogs() {
    let res = await fetch("https://dog.ceo/api/breeds/list/all");
    let data = await res.json();
    let breeds = Object.keys(data.message);
    return breeds.filter(b => b.startsWith('s')).map(b => "Pratik Breed: " + b);
}

getDogs().then(data => console.log("Example 3:", data));

const obj3 = { animal: "Dog", bark: "Loud" };
console.log(JSON.stringify(obj3));

const t3 = setTimeout(() => { console.log("Data received"); }, 5000);
console.log("test");
clearTimeout(t3);

const i3 = setInterval(() => { console.log("Checking for new data..."); }, 3000);
clearInterval(i3);