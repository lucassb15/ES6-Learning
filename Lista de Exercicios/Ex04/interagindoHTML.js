


function clicou () {
    
    let nome = prompt('Digite seu nome: ');
    let message =  document.getElementById('resultado');

    message.innerHTML = `<p> Olá <strong>${nome}</strong>! É um grande prazer te conhecer! &#x1F596 </p>`
    
   
}