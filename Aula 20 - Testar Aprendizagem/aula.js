

//

 let nome = 'Lucas';
 let surname = 'Barbosa';
 let age = 22;

 const person = {
    nome,
    surname,
    age,
    hello(){
        console.log("Olá !");
    }

 };

 console.log(person);

 person.hello();

 function animal (cat = 'Fifo', dog = 'Bilu'){
   console.log(`O gato ${cat} brigou com o cachorro ${dog}`);
 }

 animal();
 animal(cat = 'Billy');

 const list = document.querySelectorAll('#list li');
 const listArray = Array.from(list);

 const nomes = document.querySelectorAll('#nomes li');
 const listaArray = Array.from(nomes);

 console.log(listaArray);

 const names = listaArray.map((name) => name.textContent);

 console.log(names);

 const arr = Array.of('Casa' , 5 , 'Rua' , 'Negro Reis' , 209);
 
 var i = 0;

 for(i ; i < arr.length ; i++){
    console.log(arr[i]);
 };

 arr.fill('cinco', 1, 2);
 console.log(arr);

 arr.push('São Paulo');

 console.log(arr);

 const [casa, numero, rua, bairro, numeroCasa, estado] = arr;

 console.log(`${casa}: ${numero}, ${rua} ${bairro} numero: ${numeroCasa} estado: ${estado}`);

 a=10;
 b=5;
 console.log('A: ' + a);
 console.log('B: ' + b);
 console.log("SE [A] FOR MAIOR QUE [B] INVERTE OS VALORES");
 
 if(a > b){
    [a, b] = [b, a];
 }

 console.log('A: ' + a);
 console.log('B: ' + b);

 