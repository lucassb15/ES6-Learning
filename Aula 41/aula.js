
console.log("EcmaScript 6");
console.log(" ");

async function getPosts() {
    try{
        const response = await fetch('https://willianjusten.com.br/search.json');
        const data = await response.json();
    
        return data.map(post => {
            console.log(post.title);
        });
    } catch (erro) {
        console.error('Nooo, we got an erro!');
    }
}

getPosts();

