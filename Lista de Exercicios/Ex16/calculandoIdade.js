

function clicou(nascimento,data,idade) {
    data = new Date();
    nascimento = Number(prompt('Em que ano você nasceu? '));
    idade = (data.getFullYear() - nascimento);
    res = document.getElementById('resultado');
    res.innerHTML = `Quem nasceu em ${nascimento} vai completar <strong>${idade}</strong> anos em ${data.getFullYear()}`; 
}