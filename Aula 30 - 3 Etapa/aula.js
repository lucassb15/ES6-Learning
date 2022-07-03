
console.log("EcmaScript 6");
console.log(" ");

let foo = Symbol('name');
let bar = Symbol('name');

// console.log(foo == bar);

    let obj = {
        [Symbol('name')]: 'Lucas',
        [Symbol('age')]: 22,
        city: 'Dublin'
    }

   const symbols = Object.getOwnPropertySymbols(obj);

   const data = symbols.map(sym => obj[sym]);

   console.log(data);