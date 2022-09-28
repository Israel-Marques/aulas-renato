let letra = prompt('Digite uma letra:')
while ("qwertyuioplkjhgfdsazxcvbnmQWERTYUIOPLKJHGFDSAZXCVBNM".indexOf(letra) < 0) {
    letra = prompt('Digite uma letra:')
}
letra = letra.toLocaleUpperCase()
if (letra != 'A' && letra != 'E' && letra != 'I' && letra != 'O' && letra != 'U') {
    alert(letra + ' é Consoante!')
} else {
    alert(letra + ' é vogal!')
}

/* const vogais = ["aeiou"];
const consoantes = ["b,c,d,f,g,h,j,k,l,m,n,p,q,r,s,t,v,x,y,z"];

var letra = prompt("Digite uma letra do nosso alfabeto");

for (var i = 0; i < consoantes.length; i++) {
  var letraCompara = consoantes[i];
  console.log(letraCompara);

  if (letra == letraCompara) {
    alert("Sua letra é uma consoante");
  } else {
    console.log(consoantes[i]);
  }
} */

/* 
/*const vogais=["aeiou"];/* a, e, i, o, u 
const consoantes=["b,c,d,f,g,h,j,k,l,m,n,p,q,r,s,t,v,x,y,z"];
var letra = (prompt(`Digite uma letra: `));

for (var i=0 ; i <vogais.length; i++ ){
if (letra==vogais[i]);
} 
} */
