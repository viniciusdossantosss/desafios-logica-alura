function alterarStatusBotao(numero){
    const botao = document.querySelector(`#game-${numero} a`);
    if (botao.classList.contains('dashboard__item__button--return')){
        botao.classList.remove('dashboard__item__button--return')
        botao.textContent = "Alugar"
    } else {
        botao.classList.add('dashboard__item__button--return');
        botao.textContent = "Devolver"
    }
}

function alterarStatusImagem(numero){
    const imagem = document.querySelector(`#game-${numero} div`);
    if (imagem.classList.contains('dashboard__item__img--rented')){
        imagem.classList.remove('dashboard__item__img--rented');
    } else {
        imagem.classList.add('dashboard__item__img--rented');
    }
}


function alterarStatus(numero){
    alterarStatusBotao(numero);
    alterarStatusImagem(numero);
}

