const fetch = require('node-fetch');
const now = require("performance-now");
const URL = "https://swapi.co/api/people/";

function fetchPerson(url) {
    return fetch(url)
        .then(res => res.json())
        .then((res) => res);
}

async function printNames() {
    console.log("Before");
    const start = now();
    //   const person1 = await fetchPerson(URL+"1");
    //   const person2 = await fetchPerson(URL.concat(2));
    const person1 = await fetchPerson(URL + "1");
    const person2 = await fetchPerson(URL.concat(2));
    const person1p = await person1;
    const person2p = await person2;
    console.log(person1p.name);
    console.log(person2p.name);
    console.log("After all: " + (now() - start));
}

printNames();