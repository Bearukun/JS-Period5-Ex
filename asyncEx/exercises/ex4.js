function stringManipulator(sentence, ms) {
    const words = sentence.split(' ');
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                asJson: () => new Promise((resolve, reject) => {
                    resolve(JSON.stringify({ words }));
                }),
                upperCased: sentence.toUpperCase(),
                msgLength: sentence.length
            });
        }, ms);
    });
};

async function stringManipulatorAsync(sentence, ms) {
    let data = await stringManipulator(sentence, ms);
    console.log("From first promise: " + data.upperCased);
    console.log("From first promise: " + data.msgLength);
    let res = await data.asJson();
    console.log("From second promise: " + res);
}

stringManipulatorAsync("JavaScript is cool, even when it sucks", 1000);

/* stringManipulator("JavaScript is cool, even when it sucks", 1000)
    .then(data => {
        console.log("From first promise: " + data.upperCased);
        console.log("From first promise: " + data.msgLength);
        return data.asJson()  //Opposite to when we do res.json() with fetch, since this
        //should return a JSON-string
    })
    .then(res => {
        console.log("From second promise: " + res)
    }); */