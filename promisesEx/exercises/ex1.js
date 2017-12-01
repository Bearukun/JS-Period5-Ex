const express = require('express');
const cryptoR = require('crypto');
const app = express();
const PORT = 3000;

let secuRng = {
    title: "6 Secure Randoms",
    randoms: []
}

function makeSecureRandom(size) {

    return new Promise((resolve, reject) => {
        cryptoR.randomBytes(size, function (err, buffer) {
            if (err) {
                reject();
            } else {
                let secureHex = buffer.toString('hex');
                resolve(secureHex);
            }
        })
    }).then((secureStuff) => secuRng.randoms.push({ length: secureStuff.length, random: secureStuff }))
}

function getSomeSecureShizzle(size) {
    let tempList = [];

    for (var i = size; i >= 8; i -= 8) {
        tempList.push(makeSecureRandom(i));
    }

    return tempList;
}

//Promise.all(getSomeSecureShizzle(48)).then(() => console.log(secuRng));

//c64.then((data) => console.log(data));
//c64.catch(err => console.log(err.message));

app.get('/api/securerandoms', (req, res) => {

    Promise.all(getSomeSecureShizzle(48)).then(() => res.json(secuRng));

});

app.listen(PORT, () => console.log(`listening on port ${PORT}`));