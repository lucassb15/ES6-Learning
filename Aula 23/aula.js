
console.log("EcmaScript 6");
console.log(" ");

function multiply (mult, ...args) {
    return args.map(arg => arg * mult);
}


console.log(multiply(2,1,2,3,4,5,6));

//recebe os argumentos como array