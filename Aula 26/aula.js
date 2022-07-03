
console.log("EcmaScript 6");
console.log(" ");

var post = fetch('');

setTimeout (() => {
    console.log(post);
}, 3000);

post 
    .then(data => data.json());
    