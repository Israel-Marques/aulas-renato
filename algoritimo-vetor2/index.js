
const numeros = []

let qtdNumerospares = 0
let qtdNumerosImpares = 0

for(let i=0; i < 6; i++) {
    numeros[i] = parseInt(prompt('Digite um número'))
    
    if(numeros[i] % 2 == 0 ) {
        qtdNumerospares++
    }else{
        qtdNumerosImpares++
    }
}
   
alert('Quantidade de números pares '+qtdNumerospares)
alert('Quantidade de números impares '+qtdNumerosImpares)


for(let num of numeros){
    if(num % 2 != 0 ) {
        alert('número '+num+ ' é impar')
    }else{
        alert('número '+num+ ' é par')
    }
}


/* var arr = [];
for (let i = 0; i <= 5; i++) {
  arr.push(Math.round(prompt(`digite o termo n° ${i}`)));
}

for (var cont = 0; cont <= arr.length; cont++) {
  restoDivisao=arr[cont] % 2;
  console.log(arr[cont]);
  console.log(restoDivisao);

   if (restoDivisao==0) {
    var npar = 0;
    npar=npar+1
  } if(restoDivisao>0) {
    var numerosimpar = [];
    var termosImpar =0;
    termosimpar=termosImpar+ 1;
    numerosimpar.push(arr[cont]); 
  } 
}
console.log(`A QUANTIDADE DE  NUMEROS PARES DO ARRAY É: ${npar}`);
console.log(`A QUANTIDADE DE  NUMEROS IMPARES DO ARRAY É: ${termosImpar}`); 
console.log(`OS NUMEROS IMPARES DO ARRAY SÃO: ${numerosimpar}`);
  */
