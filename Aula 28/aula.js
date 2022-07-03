
console.log("EcmaScript 6");
console.log(" ");

class Animal {
    constructor(kind, sound) {
        this.kind = kind;
        this.sound = sound;
    }
    
    hello() {
        console.log(`${this.sound} I 'm a ${this.kind}`);
    }

    static info() {
        console.log("This is a class  to create animals");
    }

    get name() {
        console.log(`${this.sound} My name is Jake ! `);
    }

    set nickname (nick) {
        this.nick = nick;
    }
}



const dog = new Animal('dog' , 'auau');
const cat = new Animal('cat', 'meow');
