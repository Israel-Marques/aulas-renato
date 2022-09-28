var altura=[];

for (var i=1; i<15; i++){
    altura.push(parseFloat(prompt(`Dinite a autura N° ${i}`)));   
}

const min = Math.min(...altura);
const max = Math.max(...altura);

console.log(`A menor altura é: ${min}`);
console.log(`A maior altura é: ${max}`);

