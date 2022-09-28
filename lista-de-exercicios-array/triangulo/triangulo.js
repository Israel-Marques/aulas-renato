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


/* function PA(){
    var valor = parseInt(document.getElementById('inicial').value);
    var razao = parseInt(document.getElementById('razao').value);
    var termo = parseInt(document.getElementById('termo').value);
    var pa='';
  
    for(var count=1; count<=termo ; count++){
     pa += "Termo "+count+" = "+valor+"<br />";
      valor += razao;
    }
    document.write(pa);
  } */