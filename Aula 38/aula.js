
console.log("EcmaScript 6");
console.log(" ");

let obj1 = {
    name: 'Lucas',
    age: 22,
}

let obj2 = {
    name: 'Jonas',
    age: 26
}

let ws = new WeakMap();

ws.set(obj1, 'info do Lucas');

ws.set(obj2, 'info do Jonas');