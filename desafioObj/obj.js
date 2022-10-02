
var produto;
var feedback=document.getElementById('idFeedback')
function capturaDados(){
     produto = {
        nome: document.getElementById('inputNome').value,
        marca: document.getElementById('inputMarca').value,
        imagem: document.getElementById('inputImagem').value,
        precoUnitario: parseFloat(document.getElementById('inputPrecoUnitario').value),
        qtdEstoque: parseInt(document.getElementById('inputEstoque').value),

        calcularPrecoTotal (){
            return this.qtdEstoque * this.precoUnitario
        }
    }
}


function renderizaObj() {
    let table = document.getElementById("table")
    let row = table.insertRow()

    let nome = row.insertCell(0)
    nome.innerHTML = produto.nome

    let marca = row.insertCell(1)
    marca.innerHTML = produto.marca

    let img =( `<img src="${produto.imagem}" alt="imagem do produto" width="50px"> `)
    let imagem = row.insertCell(2)
    imagem.innerHTML = img

    let precoUnitario = row.insertCell(3)
    precoUnitario.innerHTML = produto.precoUnitario

    let qtdEstoque = row.insertCell(4)
    qtdEstoque.innerHTML = produto.qtdEstoque

    let total = row.insertCell(5)
    total.innerHTML = 'R$ ' + produto.calcularPrecoTotal().toFixed(2)

    document.getElementById("form").reset() 
}

function valida(){
    console.log(produto);
    if (produto.nome || produto.marca || produto.imagem || produto.precoUnitario || produto.qtdEstoque != null && produto.nome || produto.marca || produto.imagem || produto.precoUnitario || produto.qtdEstoque !=''){
        feedback.textContent="cadastrado com sucesso"
        feedback.classList.remove('display');
        renderizaObj();
    }
}
let button=document.getElementById('cadastrar')
button.addEventListener("click",
function() {
    capturaDados();
    valida();
});



    

/* function Pessoa(primNome, sbrNome) {
    this.nome = primNome;
    this.sobrenome = sbrNome;
  } */