let a = {street: "Lyngbyvej 45"};
let person = { fName: "Kurt", lName: "Wonnegut", address:a };
console.log(person);

function changePerson(p) {
        p.lName = "Hansen";
        return p;
}
function changePersonImmutable(p) {
    //let newP = Object.assign({}, p, { lName: "Hansen" })
    let newP = {...p,lName:"Hansen"};
    newP.address.street = "Changed";
    return newP;
}


let p2 = changePersonImmutable(person);
console.log(p2);
console.log(person);
