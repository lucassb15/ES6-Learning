

function clicou(numero, res) {
    numero = Number(prompt('Digite um número: '));
    res = document.getElementById('resultado');
    if(numero % 2 == 0){
    res.innerHTML = `O numero ${numero} é par`;
    } else {
    res.innerHTML = `O numero ${numero} é impar`;
    }
}