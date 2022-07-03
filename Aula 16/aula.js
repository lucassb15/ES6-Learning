

// find e findindex

const data = [
    {
        name: 'Lucas',
        age: 22,
        city: 'Aparecida',
    },
    {
        name: 'Pedro',
        age: 22,
        city: 'Guaratinguetá',
    }
];

// const sampleArray = [4, -5, 0, -1];

// const underZero = sampleArray.find(x => x < 0);

// console.log(underZero);

// const underZeroIndex = sampleArray.findIndex(x => x < 0);

// console.log(underZeroIndex);

const lucas = data.find(person => person.name === 'Lucas');

console.log(lucas);

const pedroIndex = data.findIndex(person => person.name === 'Pedro');

console.log(pedroIndex);

// achar algo no array