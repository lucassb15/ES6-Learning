
console.log("EcmaScript 6");
console.log(" ");


const animals = {
    camel: 3,
    dog: 2,
    cat: 1,
}



const animalsMap = new Map(Object.entries(animals));

console.log(animalsMap.size);

console.log(animalsMap.has('dog'));
console.log(animalsMap.get('dog'));
