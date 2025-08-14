let total = 0;

function adicionar() {
    let quantidade = Number(document.getElementById('quantidade').value);
    let produto = document.getElementById('produto').value;

    let nomeProduto;
    let valorProduto;

    if (produto === "Fone de ouvido - R$100") {
        nomeProduto = 'Fone de Ouvido';
        valorProduto = 100;
    } else if (produto === "Celular - R$1400") {
        nomeProduto = 'Celular';
        valorProduto = 1400;
    } else {
        nomeProduto = 'Oculos VR';
        valorProduto = 5000;
    }

    if (!Number.isInteger(quantidade) || numeroInteiro(quantidade)){
        alert("A quantidade deve ser um número inteiro posotivo.");
        return;
    }


    let listaProdutos = document.getElementById("lista-produtos");

    let elemento = document.createElement("section");
    elemento.classList.add("carrinho__produtos__produto");
    elemento.innerHTML = `<span class="texto-azul">${quantidade}x</span> ${nomeProduto}<span class="texto-azul"> R$${valorProduto}</span>`;
    listaProdutos.appendChild(elemento);

    let totalPedido = quantidade * valorProduto;
    total += totalPedido;

    let totalValor = document.getElementById("valor-total");
    totalValor.textContent = `R$${total}`;

    document.getElementById("quantidade").value = 0;



}

function numeroInteiro(numero) {
    if (numero <= 0) {
        return true;
    } 
}

function limpar() {
    let totalValor = document.getElementById("valor-total");
    total = 0;
    totalValor.textContent = `R$${total}`;

    let elementoLimpo = document.getElementById("lista-produtos");
    elementoLimpo.innerHTML = "";
}

