

function clicou(res,data) {
    let meses = new Array('Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez')
    let semana = new Array ('Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb')
    data = new Date();
    res = document.getElementById('resultado');
    res.innerHTML = `
    <p>Dia: <mark>${data.getDay()}</mark></p>
    <p>Mês: <mark>${meses[data.getMonth()]}</mark></p>
    <p>Ano: <mark>${data.getFullYear()}</mark></p>
    <p>Dia da semana: <mark>${semana[data.getDay()]}</mark></p>
    <p>Hora: <mark>${data.getHours()}</mark></p>
    <p>Minutos: <mark>${data.getMinutes()}</mark></p>
    <p>Segundos: <mark>${data.getSeconds()}</mark></p>`;
}

