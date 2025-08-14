function sortear(){
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    let sorteados = [];
    let numero;

    if (de >= ate){
        limparCampos();
        return 0;
    }

    if (quantidade.trim() === '' || de.trim() === '' || ate.trim() === ''){
        limparCampos();
        return 0;
    }

    let quatidadeverificada = ate - de;

    if(quatidadeverificada > quantidade){
        limparCampos();
        return 0;
    }



    for (let i = 0; i < quantidade; i++) {
        numero = obterNumeroAleatorio(de, ate);

        while (sorteados.includes(numero)){
            numero = obterNumeroAleatorio(de, ate);
        }

        sorteados.push(numero);

    }

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${sorteados}</label>`;

    ligarStatusBotao();
}

function obterNumeroAleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function ligarStatusBotao(){
    let botao = document.getElementById('btn-reiniciar');
    if (botao.classList.contains('container__botao-desabilitado')){
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    }
}

function desligarStatusBotao(){
    let botao = document.getElementById('btn-reiniciar');
    if(botao.classList.contains('container__botao')){
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}

function limparCampos(){
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
}

function reiniciar(){
    limparCampos();
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados: Nenhum até agora.</label>'
    desligarStatusBotao();
}
