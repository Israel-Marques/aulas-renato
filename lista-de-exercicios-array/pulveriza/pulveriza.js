
var  tipo=parseInt(prompt("Informe o tipo de praga com o numero da alternativa: Tipo 1 – ervas daninhas R$ 50,00 por acre ||Tipo 2 – gafanhotos R$ 100,00 por acre || Tipo 3 – broca R$ 150,00 por acre || Tipo 4 – todos acima R$ 250,00 por acre."));
var  acre=parseInt(prompt("Informe o tamanho  da área em Acres: "));
var preco;
var precoDesconto;
switch (tipo) {
    case 1:
        preco=acre*50;
      break;
    case 2:
        preco=acre*100;
      break;
    case 3:
        preco=acre*150;
      break;
      case 4:
        preco=acre*250;
      break;
    default:
        alert("escolha entre as 4 opções!");
      break;
  }

if(preco<=750){
console.log(`1- você pagará: ${preco}`);
}
else if(preco>750 && acre<1000){
    precoDesconto=preco-750;
    preco=precoDesconto-precoDesconto*(10/100);
    preco=preco+750;
    console.log(`2-você pagará::${preco}`);
}
  else if(acre>1000 && preco>750){
    preco=preco-preco*(5/100);
    precoDesconto=preco-750;
    preco=precoDesconto-precoDesconto*(10/100);
    preco=preco+750;
    console.log(` você pagará::: ${preco}`);
}
  else{
    console.log("erro");
  }

