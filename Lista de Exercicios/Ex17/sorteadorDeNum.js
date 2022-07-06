


function clicou (gerador) {
    gerador = Math.round(Math.random()*100);
    res = document.getElementById('resultado');
    res.innerHTML += `<p>Acabei de pensar no número <mark>${gerador}</mark></p>`
}

function limpar() {
    res.innerHTML = null;
}