
alert('Seja bem-vindo(a) ao meu site! ');

function clicou (a, aDobro, aMetade, res) {
    a = prompt('Digite um número: ');
    res = document.getElementById('resultado');
    res.innerHTML = `O dobro de ${a} é ${a*2} e a metade é ${a/2}!`
}