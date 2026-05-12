async function getData() {
    return await new Promise((resolve, reject) => {
        if(2 < 3) {
            setTimeout(() => { resolve("Data received"); }, 2000);
        } else { reject('not working') }
    });
}

async function getStoreData() {
    let response = await fetch("https://fakestoreapi.com/products");
    let data = await response.json();
    return data.filter(item => item.price < 50).map(item => ({ ...item, title: "Pratik " + item.title }));
}

getStoreData().then(data => console.log("Example 2:", data));

const obj2 = { item: "Laptop", price: 40000 };
console.log(JSON.stringify(obj2));

const timeoutId2 = setTimeout(() => { console.log("Data received"); }, 5000);
console.log("test");
clearTimeout(timeoutId2);

const i2 = setInterval(() => { console.log("Checking for new data..."); }, 3000);
clearInterval(i2);