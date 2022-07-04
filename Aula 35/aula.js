
console.log("EcmaScript 6");
console.log(" ");

let mySet = new Set(['willian' , 'lucas', 'roberto']);

mySet.add('joao');
mySet.add('joao');
mySet.add('joao');
mySet.add('carlos');

mySet.delete('willian');

console.log(mySet.has('willian'));
console.log(mySet.has('lucas'));

console.log(mySet[1]);

let it = mySet.values();

for (name of it){
    console.log(name);
}

// valores unicos 