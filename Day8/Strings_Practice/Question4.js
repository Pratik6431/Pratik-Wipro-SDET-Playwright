// 4. Capitalize the first letter of every word in a sentence.

function capitalizeWordsMap(str) {
    return str
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
}

console.log(capitalizeWordsMap("pratik kumar hansda"));