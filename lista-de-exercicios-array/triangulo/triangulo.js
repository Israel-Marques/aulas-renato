let lado1= prompt('Digite o lado 01:');
let lado2= prompt('Digite o lado 02:');
let lado3= prompt('Digite o lado 03:');


if(lado1==lado2 && lado1==lado3 && lado2==lado3 ){
    alert("Seu triangulo é equilatero");
}
else if(lado1!=lado2 && lado1!=lado3 && lado2!=lado3 ){
    alert("Seu triangulo é escaleno");
}else {
   alert("Seu triangulo é isoceles");

}

