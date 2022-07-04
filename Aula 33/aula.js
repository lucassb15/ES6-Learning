
console.log("EcmaScript 6");
console.log(" ");

function ajax(url) {
    fetch(url)
          then(data => data.json())
          then(data => dados.next(data));
        }
    // https://willianjusten.com.br/search.json
    // https://api.github.com/users/willianjusten

 function* ajaxGen() {

    console.log('Buscando posts ...');
    const posts = yield ajax('https://willianjusten.com.br/search.json');
    console.log(posts);

    console.log('Buscando dados github ...')
    const github = yield ajax('https://api.github.com/users/willianjusten');
    console.log(github);
    }
    
    const dados =  ajaxGen;
    dados.next();