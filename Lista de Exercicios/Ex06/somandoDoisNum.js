


function clicou (a,b) {
   a = Number(prompt('Digite um número: '));
   b = Number(prompt('Digite outro número: '));
   res = document.getElementById('resultado');
   res.innerHTML = `<p> A soma entre <mark>${a}</mark> e <mark>${b}</mark> é igual a <strong>${a+b}!</strong> </p>`
}