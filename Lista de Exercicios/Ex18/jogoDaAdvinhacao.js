
let secreto = Math.round(Math.random()*99);
function clicou(resposta) {
    
    resposta = Number(prompt('Digite um número: '));
    res = document.getElementById('resultado');
    if (resposta == secreto) {
        btn = document.getElementById('btnJ').disabled = true;
        res.innerHTML += `<p>Você digitou <mark>${resposta}</mark>. Parabéns você acertou o numero secreto <strong>${secreto}!</strong></p>`;
       
    } else if (resposta > secreto){
        res.innerHTML += `<p>Você digitou <mark>${resposta}</mark>. Meu número é <strong>MENOR</strong>!</p>`;
    } else {
        res.innerHTML += `<p>Você digitou <mark>${resposta}</mark>. Meu número é <strong>MAIOR</strong>!</p>`;
    }
}

function resetar() {
    res.innerHTML = null;
    secreto = Math.round(Math.random()*99);
    btn = document.getElementById('btnJ').disabled = false;
    console.log(secreto);  
}

console.log(secreto);  