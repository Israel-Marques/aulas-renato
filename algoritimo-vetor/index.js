const numeros = []

let qtdNumerosPositivo = 0
let qtdNumerosNegativo = 0

for(let i=0; i < 10; i++) {
    numeros[i] = parseInt(prompt('Digite um número'))
    
    if(numeros[i] < 0 ) {
        qtdNumerosNegativo++
    }else{
        qtdNumerosPositivo++
    }
}
   
alert('Quantidade de números negativo '+qtdNumerosNegativo)
alert('Quantidade de números positivo '+qtdNumerosPositivo)

soma=0
for(let num of numeros){
    if(num > 0 ) {
        soma=soma+num 
    }
}
alert(`A soma dos números positivos é ${soma}`)