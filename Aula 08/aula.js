

var texto = "ECMASCRIPT 6";

console.log(texto);
console.log('\n');
const ireland = {
    live: 'Dublin',
    love: 'Galway'
};
console.log('Sem Template literals: ');
const text = 'Eu moro em ' + ireland.live + ' e sou apaixonado por ' + ireland.love + '!';
console.log(text);

console.log('\n');

console.log('Template literals: ');
const newText = `Eu moro em ${ireland.live} e sou apaixonado por ${ireland.love}`;
console.log(newText);

console.log('\n');

console.log('Sem Template literals: ');
const fruits = 'banana'
                + '\n'
                + 'orange'
                + '\n'
                + 'apple';
console.log(fruits);

console.log('\n');

console.log('Template literals: ');
const newFruits = 
`banana
orange
apple`;

console.log(newFruits);