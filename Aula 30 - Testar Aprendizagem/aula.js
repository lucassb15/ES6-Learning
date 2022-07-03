
console.log("EcmaScript 6");
console.log(" ");

// criar carro
function criarCarro(marca, nome, cor, portas){
    console.log(`O carro ${marca} ${nome}, de cor ${cor} tem ${portas} portas!`);
}

const carro = ['Honda', 'Civic 2022', 'Preta' , 4];

criarCarro(...carro);

// Bomba
function Som (kind, sound) {
    this.kind = kind;
    this.sound = sound;
}

Som.prototype.hello = function() {
    console.log(`${this.sound} is a ${this.kind}`);
}

const bomb = new Som('Dinamite', 'Booooomm!');