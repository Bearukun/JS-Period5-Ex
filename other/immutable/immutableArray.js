const names = ["aa","bb","cc","dd"];

//const n2 = names;
//const n2 = names.concat("ee");
//const n2 = [...names, "ee"];
//const n2 = ["ee", ...names];
const n2 = [
    ...names.slice(0,2),
    "ee",
    ...names.slice(2)
];

const n3 = n2.map(n=>n.toLocaleUpperCase());

//n2.push("ee");
console.log("Equals?", names === n2);
console.log(n2);
console.log(names);
console.log(n3);