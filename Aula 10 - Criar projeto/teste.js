

/// PROJETO ///
/*
    Criar uma ficha de usuário 
*/

    const ficha = {
        nome: 'Lucas',
        sobrenome: 'Soares Barbosa',
        idade: 22,
        email: 'lucasbarbosa@hotmail.com',
        estado: 'São Paulo',
        cidade: 'Aparecida',
        cachorro: 'Sim',
    };

    function verificarPet(animal) {   
        return  (animal) ? animal : 'não foi selecionado';  
    }
    
    const dataHoje = ['Dia: ','Mês: ','Ano: '];
    const date = new Date(); 
    
    function infoData (x,y) {
        alert(dataHoje[0] + date.getDate() +" "+ dataHoje[1] + date.getMonth() +" "+ dataHoje[2] + date.getFullYear());
        alert("Ficha do Usuário ! ");
    }
    infoData();
    
  /*
  
  
  */
    const markup =
        `
        <div>
        <header>
            <h1> Informações do usuário ${ficha.nome}</h1>
        </header>
        <section >
                <p>
                Nome: ${ficha.nome} <br>
                Sobrenome: ${ficha.sobrenome} <br>
                Idade: ${ficha.idade} <br>
                Email: ${ficha.email} <br>
                Estado: ${ficha.estado} <br>
                Cidade: ${ficha.cidade} <br>
                Tem cachorro: ${verificarPet(ficha.cachorro)}
            </p>
        </section>
        <footer>
            <span> All rights reserved ₢</span>
        </footer>
    </div>
        `;
    
      

        
        document.body.innerHTML = markup;
        