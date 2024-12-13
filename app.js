let listaDeNumerosSorteados = [];
let numeroLimite = 1000;
let numeroSecreto = geraNumeroAleatorio();
let tentativas = 1;

function mostraTextoNaTela (tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, "Brazilian Portuguese Female", {rate:1.2})
}

function verificarChute() {
    let chute = document.querySelector("input").value;
    if (chute == numeroSecreto) {
        let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
        let menssagemTentativa = `Você acertou o número secreto com ${tentativas} ${palavraTentativa}!`;
        mostraTextoNaTela("h1", "Acertou!");
        mostraTextoNaTela("p", menssagemTentativa);
        document.getElementById("reiniciar").removeAttribute("disabled");
    }else {
        if (chute > numeroSecreto) {
            mostraTextoNaTela("p", "O número secreto é menor que o número escolhido");
        }else{
            mostraTextoNaTela("p", "O número secreto é maior que o número escolhido");
        }
    }
    tentativas++;
    limpaChute();
}
function exibirMensagemIncial () {
    mostraTextoNaTela("h1", "Jogo do Número secreto");
    mostraTextoNaTela("p", `Escolha um Número entre 1 e ${numeroLimite}`);
}

function geraNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let totalElementos = listaDeNumerosSorteados.length;
    if (totalElementos == numeroLimite){
        listaDeNumerosSorteados = [];
    }
    if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return geraNumeroAleatorio();
    }else{
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return  numeroEscolhido;
    }
    
}

function limpaChute () {
    chute = document.querySelector("input");
    chute.value = '';
}
function novoJogo () {
    numeroSecreto = geraNumeroAleatorio();
    limpaChute();
    tentativas = 1;
    exibirMensagemIncial ();
    document.getElementById("reiniciar").setAttribute("disabled", true)
}
exibirMensagemIncial ();