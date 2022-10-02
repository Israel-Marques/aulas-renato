var velMaxima=100;
var  velCarro=parseInt( prompt("Informe a velocidade do carro:"));

if (velCarro>=velMaxima+10){
console.log(`A velocidade máxima é  ${velMaxima}, você ultrapassou a velocidade, e foi multado em R$50,00` );
}
else if (velCarro>=velMaxima+30){
    console.log(`A velocidade máxima é  ${velMaxima}, você ultrapassou a velocidade, e foi multado em R$100,00` );

}
else if (velCarro>=velMaxima+31){
    console.log(`A velocidade máxima é  ${velMaxima}, você ultrapassou a velocidade, e foi multado em R$200,00` );

}
else{
    console.log(`Parabéns, você está dentro do limite de velocidade` );

}