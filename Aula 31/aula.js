
console.log("EcmaScript 6");
console.log(" ");

var txt = 'Aparecida'; // iterable
var it = txt[Symbol.iterator](); // iterator

// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());

for ( letter of txt) {
    console.log(letter);
    if(letter === 'c'){break;}
}
