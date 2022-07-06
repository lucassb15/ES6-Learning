

function clicou(res,data) {
    data = new Date();
    res = document.getElementById('resultado');
    res.innerHTML = `<p> O que eu recebi do sistema foi <mark>${data}</mark></p>`;
}