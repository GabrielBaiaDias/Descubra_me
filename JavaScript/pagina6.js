
var tela = document.getElementById("tela");
const ctx = tela.getContext("2d");
const idJogadorAtual = "jogador1";
const idFrutaAtual = "fruta1";

const jogo = {
    jogadores: {
        "jogador1": { x: 1, y: 1 },
        "jogador2": { x: 9, y: 9 },
    },

    frutas: {
        "fruta1": { x: 3, y: 1 },
    }
}

document.addEventListener("keydown", pressioneTecla);

function pressioneTecla(evento) {
    const teclaPressionada = evento.key;
    const jogador = jogo.jogadores[idJogadorAtual];

    // switch (teclaPressionada) {
    //     case "ArrowLeft", jogador.x - 1 >= 0:
    //         jogador.x--
    //         return
    //     break;
    //     case "ArrowUp", jogador.y - 1 >= 0:
    //         jogador.y--
    //         return
    //     break;
    //     case "ArrowRight", jogador.x + 1 < tela.width:
    //         jogador.x++
    //         return
    //     break;
    //     case "ArrowDown", jogador.y + 1 < tela.height:
    //         jogador.y++
    //         return
    //     break;
    //     default:
    //         break;
    // }

    if (teclaPressionada === "ArrowLeft" && jogador.x - 1 >= 0) {
        jogador.x--
        return
    }

    if (teclaPressionada === "ArrowUp" && jogador.y - 1 >= 0) {
        jogador.y--
        return
    }

    if (teclaPressionada === "ArrowRight" && jogador.x + 1 < tela.width) {
        jogador.x++
        return
    }

    if (teclaPressionada === "ArrowDown" && jogador.y + 1 < tela.height) {
        jogador.y++
        return
    }

}

renderizaTela()

function renderizaTela() {

    ctx.fillStyle = "lightgray";
    ctx.clearRect(0, 0, 10, 10);

    for (const idJogador in jogo.jogadores) {
        const jogador = jogo.jogadores[idJogador];
        ctx.fillStyle = "black";
        ctx.fillRect(jogador.x, jogador.y, 1, 1);
    }

    for (const idFruta in jogo.frutas) {
        const fruta = jogo.frutas[idFruta];
        ctx.fillStyle = "green";
        ctx.fillRect(fruta.x, fruta.y, 1, 1);
    }

requestAnimationFrame(renderizaTela)

}

let resposta = document.getElementById('resposta');

function enviarResposta() {

    resposta = resposta.value;

    if (resposta == '???') {

        var url = window.location.href;

        var proximaUrl = url.split('/');

        proximaUrl.pop();

        proximaUrl = proximaUrl.join('/');

        window.location.href = proximaUrl + '/pagina7.html';

    }
}