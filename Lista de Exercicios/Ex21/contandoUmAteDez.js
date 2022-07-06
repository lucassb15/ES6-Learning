

function clicou(result) {
    var i = 0
    result = document.getElementById('resultado');
    for(i; i <= 10; i++){
        result.innerHTML += ` ${i} >`;
    }
    result.innerHTML += `🏁`;
    result.innerHTML += `<br><br><br>`;
}
