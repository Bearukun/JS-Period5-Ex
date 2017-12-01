function myPromise(msg, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            //let err = false;
            let err = msg === "Wubba lubba 4";
            if (err) {
                reject(new Error("Uppps"));
            } else {
                resolve(msg.toUpperCase());
            }
        }, delay);
    });
}

function serial() {

    let allResults = [];
    const p1 = new myPromise("hi i'm Mr. Poopybutthole!", 6000);
    p1.then(data => {
        allResults.push(data);
        return new myPromise("ooohhhh yeeaahh. you gotta get schwifty!", 2000);
    }).then(data => {
        allResults.push(data);
        return new myPromise("i'm pickle rick!!!!!", 2000);
    }).then(data => {
        allResults.push(data);
        console.log(allResults.join("\n"));
    })
        .catch(err => { console.log(err.message) });
}

//serial();

function parallel() {
    const p1 = new myPromise("Wubba lubba 1", 2000);
    const p2 = new myPromise("Wubba lubba 2", 2000);
    const p3 = new myPromise("Wubba lubba 3", 2000);
    const p4 = new myPromise("Wubba lubba 4", 2000);

    let allP = [p1, p2, p3, p4];

    Promise.all(allP)
        .then(all => {
            console.log(all.join("\n"));
        })
        .catch(err => console.log(err.message));
}

parallel();