
console.log("EcmaScript 6");
console.log(" ");

let obj = {
    name: 'Lucas',
    age: 22,
}

let proxy = new Proxy(obj, {
    get(target, name) {
        console.log('Alguem esta pedindo o nome =)');
        return target[name];
    },
    set(target, name, value) {
        console.log('Alguém esta mudando o nome!');
        target[name] = value.toUpperCase();
    },
});

    