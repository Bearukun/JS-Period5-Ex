const fetch = require("node-fetch");

let manyPromises = [];

for (let i = 0; i < 50; i++) {
    manyPromises.push(fetch("https://api.icndb.com/jokes/random").then(res => res.json()));
}

Promise.all(manyPromises)
    .then(all => console.log(all.filter(o=>o.value.joke.length < 80).map(oj => oj.value.joke)))