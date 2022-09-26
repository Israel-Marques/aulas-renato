alert("Código Funcionando!") // mostrar mensagem para o usuario
const nomeUsuario = prompt("Olá, usuário, qual o seu nome?") //mostra uma mensagem e recebe um valor

let num = Number(prompt('Olá, ' + nomeUsuario + ' Digite algum numero, por favor ')) //5
// console.log(typeof num) // typeof retorna o tipo de valor que a variavel armazena

// operadores de incremento
//const sucessor = num++ // = num + 1


//alert('O sucessor de ' + num + ' é ' + sucessor)
console.log(num++) // 5 // operador de pós-incremento
// console.log(num) // 6
console.log(++num) // 7 // operador de pré-incrimento

// operadores de decremento 
console.log(num--) // 7 // operador de pós-decremento
console.log(num) // 6
console.log(--num) // 5 // operador de pré-decremento