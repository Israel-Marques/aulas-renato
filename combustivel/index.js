const litros = parseInt(prompt('quantos litros você quer ?'));
const tipo = prompt(`Informe o tipo de combustivel, A- alcool G- gasolina `);


 if(tipo=="a"){
    alert(`O seu carro Sera abastecido com ${litros} litros do combustivel escolhido`);
    if(litros<=25 ){
        let valorAPagar= 1.90*litros
        let desconto=valorAPagar*(2/100)
        let valorFinal=valorAPagar-desconto
        console.log(valorFinal)
        
    }else{
        let valorAPagar= 1.90*litros
        let desconto=valorAPagar*(4/100)
        let valorFinal=valorAPagar-desconto
        console.log(valorFinal)
    }

}
else if(tipo=="g"){
    alert(`O seu carro Sera abastecido com ${litros} litros do combustivel escolhido`);
    if(litros<=25 ){
        let valorAPagar= 2.7*litros
        let desconto=valorAPagar*(3/100)
        let valorFinal=valorAPagar-desconto
        alert(` Você irá pagar: R$ ${valorFinal}`)        
    }else{
        let valorAPagar= 2.7*litros
        let desconto=valorAPagar*(5/100)
        let valorFinal=valorAPagar-desconto
        alert(` Você irá pagar: R$ ${valorFinal}`)
    }
}

/* 
if (tipo!="a" || tipo !="g") {
    alert("tipo de combustivel invalido")
}  */