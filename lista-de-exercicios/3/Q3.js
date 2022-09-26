let raio=Number(prompt("Digite o valor do raio"));
let diametro = (raio ** 2);
let perimetro = (Math.PI*diametro);
let area = (2*(Math.PI*raio));



alert(` A area da circunferencia é : ${Math.round(area)}`);
alert(` A area da perimetro é : ${ Math.round(perimetro)}`);
