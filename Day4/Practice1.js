function getData() {
    return new Promise((resolve, reject) => {
       
        if(2 > 3) {
            setTimeout(() => {
                resolve("Data received successfully!");
            }, 2000);
        } else {
            reject('Promise rejected: Logic failed')
        }
    });
}


fetch("https://api.thecatapi.com/v1/images/0XYvRd7oD")
    .then(res => res.json()) 
    .then(data => [data])   
    .then(data => data.filter(cat => cat.height > 500)) 
    .then(data => data.map(cat => {
       
        return {
            catId: cat.id,
            url: "Pratik_Collection_" + cat.url,
            size: cat.width + "x" + cat.height
        }
    }))
    .then(finalData => console.log("Final Output:", finalData))
    .catch(error => console.error("Error fetching data:", error));
