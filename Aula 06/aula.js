

var texto = "ECMASCRIPT 6";

console.log(texto);

const ireland = ['Dublin' , 'Galway' , 'Cork'];

const love = ireland.map(function(name) {
    return  `I love ${name}!`;
});

console.log(love , " Love");

const loveArrow = ireland.map((name) => {
    return  `I love ${name}!`;
});

console.log(loveArrow , " Love arrow");

const loveArrowSingle = ireland.map(name => {
    return  `I love ${name}!`;
});

console.log(loveArrowSingle , " Single");

const loveArrowSingleLine = ireland.map(name => `I love ${name}!`);
    

console.log(loveArrowSingleLine , " Single line");

const LoveChain = ireland
                        .filter(name => name === 'Dublin')
                        .map(name => `I love ${name}`);

console.log(LoveChain);