var certo = 0
var errado = 0
var respostas = []
var resultados = []
for (var num = 1; num <= 6; num++) {
    var input = document.getElementById(`input${num}`).value

    respostas.push(input)
    var randomN1 = Math.floor((Math.random() * 9) + 1)
    var randomN2 = Math.floor((Math.random() * 9) + 1)
    resultados.push(randomN1 * randomN2)
    var li = document.getElementById(`i${num}`)
    var conta = `${randomN1} x ${randomN2} =`

    li.innerText = conta
}

function certOuNao() {
    for (var num = 0; num <= 5; num++) {

        if (respostas[num] == resultados[num]) {
            certo++
        } else {
            errado++
        }
        if (certo == 6) {
            var confirm = document.getElementById('confirmacao');

            confirm.style.display = "block"
            confirm.style.display = "flex"
            confirm.style.alignItems = "center"
            setTimeout(function () {
                enviarResposta()
            }, 3000)
        }
    }
}

function limpaInput() {
    for (var num = 1; num <= 6; num++) {
        var input = document.getElementById(`input${num}`).value = ""
    }
}

function submit() {

    clearInterval(interval)

    seconds = seconds2
    milliseconds = 00

    document.getElementById('cron').innerText = `40:00`

    respostas.splice(0, 6)
    for (var num = 1; num <= 6; num++) {
        var input = document.getElementById(`input${num}`).value
        respostas.push(input)
    }
    var clicadoOuNao = false

    if (!clicadoOuNao) {
        certOuNao()
        clicadoOuNao = true
    }

    if (errado >= 2 && errado <= 5) {
        Swal.fire({
            allowEnterKey: false,
            toast: true,
            icon: 'warning',
            title: `<h4>Você errou ${errado} contas</h4>`,
            timer: 2000,
            timerProgressBar: true,
            color: '#ffc282',
            position: 'top-end',
            showConfirmButton: false,
            background: '#383838',
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        })
        errado = 0
    } else {

    }

    if (errado == 1) {
        Swal.fire({
            allowEnterKey: false,
            toast: true,
            icon: 'warning',
            title: `<h4>Você errou ${errado} conta</h4>`,
            timer: 2000,
            timerProgressBar: true,
            color: '#ffc282',
            position: 'top-end',
            showConfirmButton: false,
            background: '#383838',
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        })
        errado = 0;
    }

    if (errado == 6) {
        Swal.fire({
            allowEnterKey: false,
            toast: true,
            icon: 'warning',
            title: `<h4>Você errou todas as contas</h4>`,
            timer: 2000,
            timerProgressBar: true,
            color: '#ffc282',
            position: 'top-end',
            showConfirmButton: false,
            background: '#383838',
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        })
    }

    for (var num = 1; num <= 6; num++) {

        randomN1 = Math.floor((Math.random() * 9) + 1)
        randomN2 = Math.floor((Math.random() * 9) + 1)
        li = document.getElementById(`i${num}`)
        conta = `${randomN1} x ${randomN2} =`

        li.innerText = conta
    }

    blur.style.animation = ""
    blur.innerHTML = "Click in start <br> to view"

    btnStart.style.display = 'block'
    btnReset.style.display = 'none'

    clearInterval(interval)
    limpaInput()


}

var seconds = 40;
var seconds2 = seconds
var milliseconds = 0;

var interval

function extraZero(num) {
    return num < 10 ? `0${num}` : num
}

var btnStart = document.getElementById('botaoStart');
var btnReset = document.getElementById('botaoReset');

// var troca = true;

var blur = document.getElementById("blur");

function start() {
    blur.style.animation = "blurClose .3s linear"
    blur.style.animationFillMode = "forwards"
    blur.innerText = ""

    clearInterval(interval)
    interval = setInterval(timer, 10)

    btnStart.style.display = 'none'
    btnReset.style.display = 'block'
}

function reset() {

    for (var num = 1; num <= 6; num++) {

        randomN1 = Math.floor((Math.random() * 9) + 1)
        randomN2 = Math.floor((Math.random() * 9) + 1)
        li = document.getElementById(`i${num}`)
        conta = `${randomN1} x ${randomN2} =`

        li.innerText = conta
    }

    limpaInput()

    blur.style.animation = ""
    blur.innerHTML = "Click in start <br> to view"

    btnStart.style.display = 'block'
    btnReset.style.display = 'none'

    clearInterval(interval)

    seconds = seconds2
    milliseconds = 00

    document.getElementById('cron').innerText = `40:00`
}
function timer() {
    //Caso queira mudar os segundos maximos para o timer basta mudar o "seconds2"

    if (seconds == seconds2) {
        seconds--
        milliseconds = 100
    }

    if (milliseconds > -1) {
        milliseconds -= 1
    }

    if (milliseconds == -1) {
        seconds--;
        milliseconds = 100
    }

    if (seconds == 0 && milliseconds == 0) {
        seconds = 00
        milliseconds = 00
        clearInterval(interval)


        Swal.fire({
            allowEnterKey: false,
            toast: true,
            icon: 'warning',
            title: '<h4>O tempo acabou!</h4>',
            timer: 2000,
            timerProgressBar: true,
            color: '#ffc282',
            position: 'top-end',
            showConfirmButton: false,
            background: '#383838',
            confirmButtonColor: '#313131',
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        })

    }

    document.getElementById('cron').innerText = `${extraZero(seconds)}:${extraZero(milliseconds)}`
}



function enviarResposta() {

    function Fail() {
        Swal.fire({
            allowEnterKey: false,
            toast: true,
            icon: 'error',
            title: "<h6>Alguma resposta está errada!</h6>",
            timer: 2000,
            timerProgressBar: true,
            position: 'top-end',
            showConfirmButton: false,
            background: '#383838',
            color: '#E2E2E2',
            confirmButtonColor: '#313131',
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        })
    }

    if (certo == 6) {

        var url = window.location.href;

        var proximaUrl = url.split('/');

        proximaUrl.pop();

        proximaUrl = proximaUrl.join('/');

        window.location.href = proximaUrl + '/pagina6.html';

        certo = 0
    } else {
        Fail()
    }
}

document.addEventListener('keypress', function (evento) {

    if (evento.key === "Enter") {

        const botaoEnter = document.querySelector('#submit');

        botaoEnter.click();

        submit()

    }
})