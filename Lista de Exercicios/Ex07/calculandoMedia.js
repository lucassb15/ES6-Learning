

function clicou(nome, nota1, nota2) {
    nome = prompt('Qual o nome do aluno? ');
    nota1 = Number(prompt(`Qual foi a primeira nota de ${nome}?`));
    nota2 = Number(prompt(`Além de ${nota1}, qual foi a outra nota de Lucas?`));
    res = document.getElementById('resultado');
    res.innerHTML = `
    <p>Calculando a média final de <mark>${nome}</mark>.</p>
    <p>As notas obtidas foram <mark>${nota1 + ' e ' + nota2}</mark>.</p>
    <p>A média final será <mark>${((nota1+nota2)/2)}</mark>.</p>`

}   