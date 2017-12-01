/* Should log room name after 1 second delay */
class Room {
    constructor(name) {
        this.name = name;
    }

    logName() {
        console.log(this.name);
    }

    logNameAfterDelay(delay = 1000) {
        //This was inside a different scope
        //Fixed it by using ES6 syntax goodness. 
        setTimeout(() => {
            this.logName();
        }, delay)
    }
}

const room = new Room('Double room with ocean view');

room.logNameAfterDelay();


//Opgave 2

const email = document.querySelector('input[name="email"]');

const delay = 1000;

//Declare and init timeout variable
let timeout = null;
const wait = (callback) => {
    return function () {
        const args = arguments;
        //Clear the timeout(if set)
        clearTimeout(timeout);
        //Set a timeout to go off in the desired delay
        timeout = setTimeout(function () {
            callback.apply(this, args)
        }, delay);
    }
}

const updateEmail = wait((email) => {
    console.log('UPDATING EMAIL:');
    console.log(email)
});

email.addEventListener("keyup", (event) => updateEmail(event.target.value));