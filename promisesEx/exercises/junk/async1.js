let promiseFactory = function (msg, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => { //To demonstrate an async call
            var ok = true;  // simulates the result of the operation
            if (ok) {
                resolve(msg);
            }
            else {
                reject("UPPPPs");
            }
        }, delay);
    });
};

async function serialDemo(){

    console.log("Before");
    
    let p = await promiseFactory("Msg from Promise", 2000); 
    console.log(p);
    let p2 = await promiseFactory("Msg from Promise", 2000); 
    console.log(p2);
    let p3 = await promiseFactory("Msg from Promise", 2000); 
    
    console.log("After: " + p);

}

async function ParallelDemo(){
        
        let p1 = promiseFactory("Msg from Promise 1", 2000); 
        let p2 = promiseFactory("Msg from Promise 2", 2000); 
        let p3 = promiseFactory("Msg from Promise 3", 2000); 
        
        console.log("Before");

/*         Promise.all([p1,p2,p3])
        .then(allResults => console.log(allResults.join("\n"))) */
      
        try{
            const allResults = await Promise.all([p1,p2,p3]);
            console.log(allResults.join("\n"))
        }catch(err){
            console.log("Handle error: " + err);
        }
        console.log("After");
    }

//serialDemo();

ParallelDemo();
