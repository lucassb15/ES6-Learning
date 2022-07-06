

function clicou(num1, num2, res) {
 
    res = document.getElementById('resultado');
    if(num1 > num2){
    res.innerHTML = `Analisando so valores <mark>${num1}</mark> e <mark>${num2}</mark>, o maior valor é ${num1}`;
    } else {
        res.innerHTML = ``;
    }
}