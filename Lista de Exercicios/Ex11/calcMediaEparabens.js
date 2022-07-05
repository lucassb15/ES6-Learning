

function clicou(nome, nota1, nota2,media) {
    nome = prompt('Qual o nome do aluno? ');
    nota1 = Number(prompt(`Qual foi a primeira nota de ${nome}?`));
    nota2 = Number(prompt(`Além de ${nota1}, qual foi a outra nota de Lucas?`));
    res = document.getElementById('resultado');
    media = (nota1 + nota2) / 2;
    res.innerHTML = `
    <p>Calculando a média final de <mark>${nome}</mark>.</p>
    <p>As notas obtidas foram <mark>${nota1 + ' e ' + nota2}</mark>.</p>
    <p>A média final será <mark>${media}</mark>.</p>`
    if( media >= 6){
        res.innerHTML += `<p>A mensagem que temos é: <strong style="color:green;">Meus parabéns</strong> </p>`;
    } else {
        res.innerHTML += `<p>A mensagem que temos é: <strong style="color:red;">Estude um pouco mais!</strong> </p>`;
    }
}   