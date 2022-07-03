

var texto = "ECMASCRIPT 6";

console.log(texto);

const btn = document.getElementById('btn');
btn.addEventListener('click', function(){
    console.log(this);
});

{
const btn = document.getElementById('btn');
btn.addEventListener('click', () =>{
    console.log(this);
});
}


///////////////////////////////////////

const sandwich = {
    bread: 'white',
    cheese: 'cheddar',

    prepare: function(){
        return `I want a sandwich with ${this.bread} bread and ${this.cheese}`;
    },

    make: function(){
        var that = this;
        window.setTimeout(function(){
            console.log( that.prepare() );
        }, 500 );
    }
};


const btnSandwich = document.getElementById('btnSandwich');
btnSandwich.addEventListener('click', function() {sandwich.make()});
