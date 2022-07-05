

console.log(`Faça login no sistema utilizando: login(Nome , Senha);`);
let acesso = false;



function login (name, password) {
do{
    var name = prompt('Digite seu nome');
    var password = prompt('Digite sua senha');
    if (name == 'LucasADM'){alert('Logado com sucesso')} else {alert(`O nome esta incorreto !`)}
}while(name != 'LucasADM');

if (name == 'LucasADM' && password == password) {
    acesso = true
};
{
    if(acesso === true) {
        console.log(`O usuário ${name} efetuou o login com sucesso !`);
    } else {
        console.log(`Nome ou senha informado incorretamente !`);
    }
};
while(acesso === true) {
    alert('Vamos fazer uma multiplicação insira os numeros ! ');
    var num1 = prompt('Digite um numero');
    var num2 = prompt('Digite outro numero');
    function soma(num1, num2) {
        return num1 * num2;
    }
    alert(`A multiplicação de ${num1} * ${num2} é: ` + soma(num1, num2));

    var opcao = prompt(`${name}, deseja deslogar ? [sim] ou [não] `);
    while(opcao !== 'sim' && opcao !== 'nao') {
        alert('Porfavor digite [sim] ou [não]');
        var opcao = prompt(`${name}, deseja deslogar ? [sim] ou [não] `);
    }
    if(opcao === 'sim') {
        acesso = false;
        alert("Você foi deslogado do sistema!");
    } else {
        acesso = true;
    }
}; 
};