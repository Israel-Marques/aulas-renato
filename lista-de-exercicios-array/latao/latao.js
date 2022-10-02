let qtdLatao = parseFloat(prompt('Informe a quantidade em kg de latão que você precisa: '));
let qtdCobre = qtdLatao * (70/100);
let qtdZinco = qtdLatao * (30/100);
alert(`Para produzir ${qtdLatao}kg de latão, são necessários
 ${qtdCobre.toFixed(2)}kg de cobre e ${qtdZinco.toFixed(2)}kg de zinco.`);