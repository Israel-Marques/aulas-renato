var peso= parseFloat( prompt("Digite seu peso em KG: "));
var altura= parseFloat( prompt("Digite sua altura em metros: "));

var imc=peso/(altura*altura);
alert (`O seu imc é ${imc}`);