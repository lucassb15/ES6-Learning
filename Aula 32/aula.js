
console.log("EcmaScript 6");
console.log(" ");

function* genNomes() {
    yield('Lucas');
    yield('Soares');
    yield('Barbosa');
}

const names = genNomes();

console.log(names.next()); // chama um por um