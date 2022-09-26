/* Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço
normal de etiqueta e a escolha da condição de pagamento. Utilize os códigos da tabela a seguir
para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.
Código Condição de pagamento

1 À vista em dinheiro ou cheque, recebe 10% de desconto
2 À vista no cartão de crédito, recebe 15% de desconto
3 Em duas vezes, preço normal de etiqueta sem juros
4 Em três vezes, preço normal de etiqueta mais juros de 10%
*/

/** 
 * --> Métodos de pagamento
 * *   em dinheiro
 * *   em cheque
 * *   no cartão
 */


/**
 *  Estrutura de repetição
 */

// while --> enquanto

let precoProduto = parseFloat(prompt('Qual o preço do produto?')) // R$ 400 -> NaN

while (isNaN(precoProduto)== true) /* true */ {
    alert('O preço digitado é inválido. Por favor, informe o preço aénas com números, sem carácteres especiais (letras ou acentos')
    precoProduto = parseFloat(prompt('Qual o preço do produto?')) // 700 --> 700 numéricos

}

const mensagem = `
Informe o método de pagamento:
Digite 1 para pagamento em dinheiro
Digite 2 para pagamento em cheque
Digite 3 para pagamento com cartão
`
let metodoDePagamento = prompt(mensagem)

while (isNaN(metodoDePagamento) || metodoDePagamento < 1 || metodoDePagamento > 3 ) {
    alert('O método digitado é inválido. Por favor, informe o método de pagamento com números indicados, sem carácteres especiais (letras ou acentos')
    metodoDePagamento = (prompt('insira a forma de pagamento')) 


console.log(precoProduto)
console.log(metodoDePagamento)

/** 
 * se o valor da constante 'metodoDePagamento' for 1 ou 2, significa que a pessoa possuirá um desconto de 10%
 */
/*
if (metodoDePagamento == 1 || metodoDePagamento == 2) {
    const precoFinal = precoProduto * 0.9
    alert(`O preço final do pagamento é ${precoFinal} reais`)
} else if (metodoDePagamento == 3) {}

    /**
     * 1 parcela = 15% de desconto
     * 2 parcelas = preço do produto
     * 3 ou mais parcelas = acréscimo de 10%
     */

    const parcelas = parseInt(prompt(`Informe a quantidade de parcelas`))

    if (parcelas == 1) {
        const precoFinal = precoProduto * 0.85
        alert(`O preço final do pagamento é ${precoFinal} reais`)

    } else if (parcelas == 2) {
        alert(`O preço final do pagamento é ${precoProduto} reais`)

    } else {
        const precoFinal = precoProduto * 1.10
        alert(`O preço final de pagamento é ${precoFinal.toFixed(2)} reais`)

    }


}
