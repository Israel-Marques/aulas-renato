var a = parseInt( prompt('Digite o termo inicial:'));
var r = parseInt( prompt('Digite a razao:'));
var n = parseInt( prompt('Digite a quantidade de termo a ser exibido:'));
var result;

function printGP(a, r, n)
{
    let curr_term;
    for (let i = 0; i < n; i++) {
        curr_term = a * Math.pow(r, i);
        result= (curr_term + " ");
    }
}

console.log(result);