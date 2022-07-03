

var texto = "ECMASCRIPT 6";

console.log(texto);

const lucas = {
    name: "Lucas",
    age: 22
};

console.log(lucas);

Object.freeze(lucas); 

lucas.age = 22;

console.log(lucas);