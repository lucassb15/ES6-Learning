

function clicou(numero) {
    numero = Number(prompt('Digite um número: '));
    res = document.getElementById('resultado');
    res.innerHTML = 
    `<div style="font-size: 17px; font-family: "Arial"; ">
    <p> O número a ser analisado aqui será o <strong>${numero}</strong>
    <hr>
    <p> O seu valor absoluto é  ${Math.abs(numero)}</p>
    <p>  A sua parte inteira é ${Math.trunc(numero)}</p>
    <p>  O valor inteiro mais próximo é ${Math.round(numero)}</p>
    <p>  A sua raiz quadrada é ${Math.sqrt(numero)}</p>
    <p>  A sua raiz cúbica é ${Math.cbrt(numero)}</p>
    <p>  O valor de ${numero}<sup>2</sup> é ${Math.pow(numero, 2)}</p>
    <p>  O valor de ${numero}<sup>3</sup> é ${Math.pow(numero, 3)}</p>
    </div>
    `;
}