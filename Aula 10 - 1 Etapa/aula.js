

var texto = "ECMASCRIPT 6";

console.log(texto);

const city = 'Dublin';
const something = 'Guinness'
const otherThing = 'Leprechauns'

function green (template, ...values) {
    return template.reduce((accumulator, part, i) =>{
        return `
            ${accumulator}
            <span class="green" >${values[i-1].toUpperCase()}</span>
            ${part}
        `;
    })
}

const ireland = green `i live in ${city} the city of ${something} and ${otherThing}`;

document.body.innerHTML = ireland;


