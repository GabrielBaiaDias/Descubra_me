var guiaCores = document.getElementById("pergunta");

function timerGuia(time) {
    guiaCores.style.visibility = "visible"
    setTimeout(function () {

        guiaCores.style.visibility = "hidden"

    }, time);
}
timerGuia(3000)

var view1 = document.getElementById("view1");
var view2 = document.getElementById("view2");
var view3 = document.getElementById("view3");
var view4 = document.getElementById("view4");

var respostaCores = []

function removeColor(index) {
    respostaCores.splice(index, 1);
    atualizaViews();
};

function limpaRespostaCores() {
    respostaCores = [];
    view1.style.backgroundColor = "transparent";
    view2.style.backgroundColor = "transparent";
    view3.style.backgroundColor = "transparent";
    view4.style.backgroundColor = "transparent";
}

function atualizaViews() {
    if (respostaCores[0]) {
        view1.style.backgroundColor = respostaCores[0];
    } else {
        view1.style.backgroundColor = "transparent"
    }

    if (respostaCores[1]) {
        view2.style.backgroundColor = respostaCores[1];
    } else {
        view2.style.backgroundColor = "transparent"
    }

    if (respostaCores[2]) {
        view3.style.backgroundColor = respostaCores[2];
    } else {
        view3.style.backgroundColor = "transparent"
    }

    if (respostaCores[3]) {
        view4.style.backgroundColor = respostaCores[3];
    } else {
        view4.style.backgroundColor = "transparent"
    }
}

function atualizaCorGuia() {
    if (resposta[0]) {
        var verde = document.getElementById('verdeS').style.color = resposta[0];
    }

    if (resposta[1]) {
        var azul = document.getElementById('azulS').style.color = resposta[1];
    }

    if (resposta[2]) {
        var vermelho = document.getElementById('vermelhoS').style.color = resposta[2];
    }

    if (resposta[3]) {
        var amarelo = document.getElementById('amareloS').style.color = resposta[3];
    }
}

function shuffleArray(array) {
    for (let a = array.length - 1; a > 0; a--) {
        const b = Math.floor(Math.random() * (a + 1));
        [array[a], array[b]] = [array[b], array[a]];
    }
    return array;
}

var contCorreto = 0
var contErrado = 0
var numNivel = 1
var positionColors = ["#ff0000", "#00ff00", "#ffff00", "#0000ff"];

var resposta = []
resposta = shuffleArray(positionColors)
atualizaCorGuia()

var nivel = document.getElementById('numNivel');

function adicionaResposta(cor) {
    if (respostaCores.length <= 3) {
        respostaCores.push(cor);
        atualizaViews();
    }

    if (respostaCores.length == 4) {
        if (JSON.stringify(respostaCores) == JSON.stringify(resposta)) {
            numNivel++
            if (numNivel == 4) {
                numNivel--
            }
            contCorreto++
            resposta = shuffleArray(positionColors)
            timerGuia(3000)
            atualizaCorGuia()
        } else {
            contErrado++
            if (contErrado == 3) {
                contErrado = 0
                contCorreto = 0
                resposta = shuffleArray(resposta)
                numNivel = 1
            }
            Swal.fire({
                icon: 'error',
                title: '[ERROR]',
                text: `A resposta está errada!`,
                background: '#383838',
                color: '#E2E2E2',
                confirmButtonColor: '#313131',
            })

            var interval = setInterval(function () {
                timerGuia(1000)
                clearInterval(interval)
            }, 1000)

        }
        enviarResposta()
        limpaRespostaCores()
    }
    // Precisa dos dois "nivel.innerHTML" porque nao funciona so com um.. nao sei o porque ;-;
    nivel.innerHTML = `<h1>${numNivel}</h1>`
}
nivel.innerHTML = `<h1>${numNivel}</h1>`

function retornaCor(idCor) {
    switch (idCor) {
        case 1:
            return adicionaResposta("#0000ff");
        case 2:
            return adicionaResposta("#ffff00");
        case 3:
            return adicionaResposta("#ff0000");
        case 4:
            return adicionaResposta("#00ff00");
        default:
            return adicionaResposta("#000000");
    }
}

var positionColors = shuffleArray(["#ff0000", "#00ff00", "#0000ff", "#ffff00"]);

function enviarResposta() {

    if (contCorreto == 3) {

        var url = window.location.href;

        var proximaUrl = url.split('/');

        proximaUrl.pop();

        proximaUrl = proximaUrl.join('/');

        window.location.href = proximaUrl + '/pagina4.html';

        limpaRespostaCores();
    }
}

document.addEventListener('keypress', function (evento) {

    if (evento.key === "Enter") {

        const botaoEnter = document.querySelector('#botaoResposta');

        botaoEnter.click();

        function enviarResposta() { }

    }
})