
  var valor = parseInt( prompt('Digite o termo inicial:'));
  var razao = parseInt( prompt('Digite a razao:'));
  var termo = parseInt( prompt('Digite o termo a ser exibido:'));;
  var pa='';

  for(var count=1; count<=termo ; count++){
    pa=(`Termo ${count} = ${valor}`)
    valor += razao;
  }
  console.log(pa);


  