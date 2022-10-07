var fase = 4

var input = document.getElementById("input");

var guia = document.getElementById("guia");
var inicio = document.getElementById('inicio');
var jogo = document.getElementById("jogo");

var tamanhoPixelH = 0
var tamanhoPixelW = 0

function limpaGrid(idElemento) {
    const grid = document.getElementById(idElemento);

    while (grid.firstChild) {
        grid.removeChild(grid.lastChild);
    }
}

function avisoGuia() {
    var quadrado = document.createElement("div");
    quadrado.classList.add("guia");
}


function adicionaPixelInicio(x, y, texto) {
    var pixel1 = document.createElement("div");
    pixel1.style.gridColumnStart = x;
    pixel1.style.gridRowStart = y;
    pixel1.style.backgroundColor = "lightgray";
    inicio.appendChild(pixel1);

    pixel1.addEventListener("mouseover", function (e) {
        debugger

        if (fase == 1) {
            carregaJogo()
            fase++
        } else if (fase == 2) {
            carregaJogo2()
            fase++
        } else if (fase == 3) {
            carregaJogo3()
            fase++
        } else if (fase == 4) {
            carregaJogo4()
            fase++
        }


        e.stopPropagation();
    })
}

function adicionaPixel(x, y, cor = "white") {
    debugger
    if (fase <= 2) {
        if (x >= 14 && y >= 14) {
            var pxFinal = document.createElement("div");
            pxFinal.style.gridColumnStart = x;
            pxFinal.style.gridRowStart = y;
            pxFinal.style.backgroundColor = cor;
            console.log("verde")
            pxFinal.addEventListener("mouseover", function (e) {
                mostraInicio()
                e.stopPropagation();
            })
            jogo.appendChild(pxFinal);
        } else {
            var pixel1 = document.createElement("div");
            tamanhoPixelW = pixel1.offsetWidth;
            tamanhoPixelH = pixel1.offsetHeight;
            pixel1.style.gridColumnStart = x;
            pixel1.style.gridRowStart = y;
            pixel1.style.backgroundColor = cor;
            jogo.appendChild(pixel1);
            pixel1.addEventListener("mouseover", function (e) {
                e.stopPropagation();
            })

        }
    }

    if (fase == 3) {
        if (x == 20 && y == 1 ||
            x == 20 && y == 2 ||
            x == 19 && y == 1 ||
            x == 19 && y == 2) {
            var pxFinal = document.createElement("div");
            pxFinal.style.gridColumnStart = x;
            pxFinal.style.gridRowStart = y;
            pxFinal.style.backgroundColor = cor;
            console.log("verde")
            pxFinal.addEventListener("mouseover", function (e) {
                mostraInicio()
                e.stopPropagation();
            })
            jogo.appendChild(pxFinal);
        } else {
            var pixel1 = document.createElement("div");
            pixel1.style.gridColumnStart = x;
            pixel1.style.gridRowStart = y;
            pixel1.style.backgroundColor = cor;
            tamanhoPixelW = pixel1.offsetWidth;
            tamanhoPixelH = pixel1.offsetHeight;
            jogo.appendChild(pixel1);
            pixel1.addEventListener("mouseover", function (e) {
                e.stopPropagation();
            })

        }

    }

    if (fase == 4) {
        if (x == 1 && y == 20 ||
            x == 2 && y == 20 ||
            x == 1 && y == 19 ||
            x == 2 && y == 19) {
            var pxFinal = document.createElement("div");
            pxFinal.style.gridColumnStart = x;
            pxFinal.style.gridRowStart = y;
            pxFinal.style.backgroundColor = cor;
            console.log("verde")
            pxFinal.addEventListener("mouseover", function (e) {
                mostraInicio()
                e.stopPropagation();
            })
            jogo.appendChild(pxFinal);
        } else {
            var pixel1 = document.createElement("div");
            pixel1.style.gridColumnStart = x;
            pixel1.style.gridRowStart = y;
            pixel1.style.backgroundColor = cor;
            tamanhoPixelW = pixel1.offsetWidth;
            tamanhoPixelH = pixel1.offsetHeight;
            jogo.appendChild(pixel1);
            pixel1.addEventListener("mouseover", function (e) {
                e.stopPropagation();
            })

        }
    }
}

function adicionaPixelArmadilha(x, y, tempoPisca, tempoEspera) {
    setTimeout(function () {
        var pixel1 = document.createElement("div");
        pixel1.style.gridColumnStart = x;
        pixel1.style.gridRowStart = y;
        pixel1.style.backgroundColor = "rgb(255, 187, 0)";
        jogo.appendChild(pixel1);

        var interval = null

        interval = setInterval(function () {
            if (pixel1.style.display == 'none') {
                pixel1.style.display = 'block';
            } else {
                pixel1.style.display = 'none';
            }
        }, tempoPisca);
        pixel1.addEventListener("mouseover", function (e) {
            e.stopPropagation();
        })
    }, tempoEspera)

}

function adicionaPixelMovel(x, y, tempoMove, parte) {
    debugger

    var pixel1 = document.createElement("div");
    pixel1.style.gridColumnStart = x;
    pixel1.style.gridRowStart = y;
    pixel1.style.backgroundColor = "rgb(47, 127, 255)";
    pixel1.style.position = "absolute"
    if (fase == 3 || fase == 4) {
        pixel1.style.width = 27 + "px"
        pixel1.style.height = 27 + "px"
    }
    jogo.appendChild(pixel1);

    // elemento.innerText = elemento.offsetWidth // <<== Para saber qual é a largura do elemento.

    // elemento.innerText = elemento.offsetHeight // <<== Para saber qual é a altura do elemento.

    if (fase == 3) {

        var pixelAndado = 0
        var pos = 0
        var interval = null

        interval = setInterval(function () {
            debugger

            pixelAndado >= 163 ? pos-- : pos++

            if (pixelAndado == 324) {
                pixelAndado = 0
            }

            pixelAndado++;
            pixel1.style.left = pos + "px";
            // input.value = pixelAndado;

        }, tempoMove);
        pixel1.addEventListener("mouseover", function (e) {
            e.stopPropagation();
        })

    }
    if (fase == 4) {
        var partes = parte
        if (partes == 1) {
            debugger

            var pixelAndado = 26
            var posX = 0
            var posY = 0
            var interval = null

            interval = setInterval(function () {
                debugger

                if (pixelAndado >= 27 && pixelAndado < 54) {
                    posX++
                    pixel1.style.left = posX + "px";
                }

                if (pixelAndado >= 54 && pixelAndado < 81) {
                    posY++
                    pixel1.style.top = posY + "px";
                }

                if (pixelAndado >= 81 && pixelAndado < 108) {
                    posX--
                    pixel1.style.left = posX + "px";
                }

                if (pixelAndado >= 108 && pixelAndado < 235) {
                    posY--
                    pixel1.style.top = posY + "px";
                }

                if (pixelAndado == 134) {
                    posX = 0
                    posY = 0
                    pixelAndado = 26
                }

                pixelAndado++;

            }, tempoMove)
            pixel1.addEventListener("mouseover", function (e) {
                e.stopPropagation();
            })
        } if (partes == 2) {
            debugger

            var posX = 0
            var posY = 0
            var pixelAndado = 0

            var interval = setInterval(function () {

                if (pixelAndado >= 0 && pixelAndado < 108 || pixelAndado >= 162 && pixelAndado < 270) {
                    posX++
                    pixel1.style.left = posX + "px";

                }

                if (pixelAndado >= 108 && pixelAndado < 162 || pixelAndado >= 270 && pixelAndado <= 351) {
                    posY++
                    pixel1.style.top = posY + "px";
                }

                // if (pixelAndado == 351 && pixelAndado >= 270) {
                // posY--
                // pixel1.style.top = posY + "px";
                // }

                if (pixelAndado == 351) {
                    jogo.removeChild(pixel1);
                    adicionaPixelMovel(10, 10, 10, 2);
                }

                pixelAndado++
                input.value = "pixelA " + pixelAndado + " | posY " + posY + "| posX " + posX;

            }, tempoMove)

            pixel1.addEventListener("mouseover", function (e) {
                e.stopPropagation();
            })

        }
    }
}

mostraInicio()

function mostraInicio() {
    debugger
    // jogo.style.display = "none";
    // inicio.style.display = "grid";
    // guia.style.display = "block"

    if (fase == 1) {
        limpaGrid("inicio");
        adicionaPixelInicio(1, 1);
        adicionaPixelInicio(1, 2);
        adicionaPixelInicio(2, 2);
        adicionaPixelInicio(2, 1);
    }
    if (fase == 2) {
        limpaGrid("inicio");
        adicionaPixelInicio(15, 1);
        adicionaPixelInicio(15, 2);
        adicionaPixelInicio(14, 2);
        adicionaPixelInicio(14, 1);
    }
    if (fase == 3) {
        limpaGrid("inicio");
        inicio.style.gridTemplateRows = "repeat(20, auto)";
        inicio.style.gridTemplateColumns = "repeat(20, auto)";
        adicionaPixelInicio(1, 19);
        adicionaPixelInicio(2, 20);
        adicionaPixelInicio(1, 20);
        adicionaPixelInicio(2, 19);
    }
    if (fase == 4) {
        limpaGrid("inicio");
        inicio.style.gridTemplateRows = "repeat(20, auto)";
        inicio.style.gridTemplateColumns = "repeat(20, auto)";
        adicionaPixelInicio(1, 2);
        adicionaPixelInicio(2, 2);
        adicionaPixelInicio(1, 1);
        adicionaPixelInicio(2, 1);
    }
}

var jogo = document.getElementById("jogo");

jogo.addEventListener("mouseover", function () {
    console.log("jogo")
    //document.location.reload(); //  <<<<<<==<<==<===================

})


//------------------------------------------------------------//
//=============--- INÍCIO CARREGAJOGO NÍVEL 1 ---=============//

function carregaJogo() {
    debugger
    jogo.style.display = 'grid'
    guia.style.display = "none"
    inicio.style.display = 'none'
    jogo.classList.add("container_2")
    adicionaPixel(1, 1, 'lightblue')
    adicionaPixel(1, 2, 'lightblue')
    adicionaPixel(2, 1, 'lightblue')
    adicionaPixel(2, 2, 'lightblue')

    adicionaPixel(1, 3);
    adicionaPixel(1, 4);
    adicionaPixel(1, 5);
    adicionaPixel(1, 6);
    adicionaPixel(1, 7);
    adicionaPixel(2, 7);
    adicionaPixel(3, 7);
    adicionaPixel(4, 7);
    adicionaPixel(5, 7);
    adicionaPixel(6, 7);
    adicionaPixel(6, 6);
    adicionaPixel(6, 5);
    adicionaPixel(6, 4);
    adicionaPixel(6, 3);
    adicionaPixel(6, 2);
    adicionaPixel(7, 2);
    adicionaPixel(8, 2);
    adicionaPixel(8, 3);
    adicionaPixel(8, 4);
    adicionaPixel(8, 5);
    adicionaPixel(8, 6);
    adicionaPixel(8, 7);
    adicionaPixel(8, 8);
    adicionaPixel(8, 9);
    adicionaPixel(7, 9);
    adicionaPixel(6, 9);
    adicionaPixel(5, 9);
    adicionaPixel(5, 10);
    adicionaPixel(5, 11);
    adicionaPixel(5, 12);
    adicionaPixel(5, 13);
    adicionaPixel(6, 13);
    adicionaPixel(7, 13);
    adicionaPixel(8, 13);
    adicionaPixel(9, 13);
    adicionaPixel(10, 9);
    adicionaPixel(11, 9);
    adicionaPixel(12, 9);
    adicionaPixel(13, 9);
    adicionaPixel(10, 13);
    adicionaPixel(10, 12);
    adicionaPixel(10, 11);
    adicionaPixel(10, 10);
    adicionaPixel(13, 10);
    adicionaPixel(13, 11);
    adicionaPixel(13, 12);
    adicionaPixel(13, 13);
    adicionaPixel(13, 14);

    adicionaPixel(14, 15, 'lightgreen');
    adicionaPixel(14, 14, 'lightgreen');
    adicionaPixel(15, 14, 'lightgreen');
    adicionaPixel(15, 15, 'lightgreen');
}

//==============--- FINAL CARREGAJOGO NÍVEL 1 ---==============//
//-------------------------------------------------------------//

//------------------------------------------------------------//
//=============--- INÍCIO CARREGAJOGO NÍVEL 2 ---=============//

function carregaJogo2() {
    debugger
    limpaGrid("jogo")
    jogo.style.display = 'grid';
    guia.style.display = "none"
    inicio.style.display = 'none';

    adicionaPixel(15, 1, "lightpink");
    adicionaPixel(15, 2, "lightpink");
    adicionaPixel(14, 2, "lightpink");
    adicionaPixel(14, 1, "lightpink");

    adicionaPixel(10, 14);
    adicionaPixel(10, 13);
    adicionaPixel(10, 12);
    adicionaPixel(11, 12);
    adicionaPixel(12, 12);
    adicionaPixel(13, 12);
    adicionaPixel(14, 12);
    adicionaPixel(14, 13);
    adicionaPixel(15, 3);
    adicionaPixel(15, 4);
    adicionaPixel(14, 4);
    adicionaPixel(13, 4);
    adicionaPixel(12, 4);
    adicionaPixel(11, 4);
    adicionaPixel(11, 5);
    adicionaPixel(11, 6);
    adicionaPixel(11, 7);
    adicionaPixel(11, 8);
    adicionaPixel(10, 8);
    adicionaPixel(3, 10);
    adicionaPixel(4, 10);
    adicionaPixel(5, 10);
    adicionaPixel(6, 10);
    adicionaPixel(7, 10);
    adicionaPixel(7, 11);
    adicionaPixelArmadilha(7, 12, 600);
    adicionaPixelArmadilha(7, 13, 600);
    adicionaPixel(7, 14);
    adicionaPixel(8, 14);
    adicionaPixel(9, 14);
    adicionaPixel(9, 7);
    adicionaPixel(9, 8);
    adicionaPixel(9, 6);
    adicionaPixel(8, 6);
    adicionaPixel(7, 6);
    adicionaPixel(6, 6);
    adicionaPixel(6, 5);
    adicionaPixel(6, 4);
    adicionaPixel(6, 3);
    adicionaPixel(6, 2);
    adicionaPixel(3, 2);
    adicionaPixel(3, 3);
    adicionaPixel(3, 4);
    adicionaPixel(5, 2);
    adicionaPixel(4, 2);
    adicionaPixelArmadilha(3, 5, 600);
    adicionaPixelArmadilha(3, 6, 600);
    adicionaPixel(3, 7);
    adicionaPixel(3, 8);
    adicionaPixel(3, 9);

    adicionaPixel(14, 15, "lightgreen");
    adicionaPixel(15, 14, "lightgreen");
    adicionaPixel(14, 14, "lightgreen");
    adicionaPixel(15, 15, "lightgreen");
}

//==============--- FINAL CARREGAJOGO NÍVEL 2 ---==============//
//-------------------------------------------------------------//

//------------------------------------------------------------//
//=============--- INÍCIO CARREGAJOGO NÍVEL 3 ---=============//

function carregaJogo3() {
    debugger
    limpaGrid("jogo")
    jogo.style.display = 'grid';
    guia.style.display = "none"
    jogo.style.gridTemplateRows = "repeat(20, auto)";
    jogo.style.gridTemplateColumns = "repeat(20, auto)";
    inicio.style.display = 'none';

    adicionaPixel(2, 19, "lightsalmon");
    adicionaPixel(1, 19, "lightsalmon");
    adicionaPixel(2, 20, "lightsalmon");
    adicionaPixel(1, 20, "lightsalmon");

    adicionaPixel(3, 19);
    adicionaPixel(3, 18);
    adicionaPixel(3, 17);
    adicionaPixel(4, 17);
    adicionaPixel(5, 17);
    adicionaPixel(5, 18);
    adicionaPixel(5, 19, "lightblue");
    adicionaPixelMovel(5, 19, 10);
    // adicionaPixelMovel(7, 19);
    // adicionaPixelMovel(8, 19);
    // adicionaPixelMovel(9, 19);
    // adicionaPixelMovel(10, 19);
    adicionaPixel(11, 19, "lightblue");
    adicionaPixel(12, 19);
    adicionaPixel(12, 18);
    adicionaPixel(12, 17);
    adicionaPixel(13, 17);
    adicionaPixel(14, 17);
    adicionaPixel(14, 18);
    adicionaPixel(15, 18);
    adicionaPixel(16, 18);
    adicionaPixel(17, 18);
    adicionaPixel(18, 18);
    adicionaPixel(18, 17);
    adicionaPixel(18, 16);
    adicionaPixel(17, 16);
    adicionaPixel(16, 16);
    adicionaPixel(16, 15);
    adicionaPixel(16, 14);
    adicionaPixel(15, 14);
    adicionaPixel(15, 13);
    adicionaPixel(14, 13);
    adicionaPixel(13, 13);
    adicionaPixelArmadilha(12, 13, 550);
    adicionaPixelArmadilha(11, 13, 550);
    adicionaPixelArmadilha(11, 12, 550);
    adicionaPixel(11, 11);
    adicionaPixel(10, 11);
    adicionaPixel(9, 11);
    adicionaPixel(8, 11);
    adicionaPixel(7, 11);
    adicionaPixel(7, 10);
    adicionaPixel(7, 9);
    adicionaPixel(8, 9);
    adicionaPixel(9, 9);
    adicionaPixel(9, 8);
    adicionaPixel(9, 7);
    adicionaPixel(9, 6);
    adicionaPixel(8, 6);
    adicionaPixel(7, 6);
    adicionaPixel(6, 6);
    adicionaPixel(5, 6);
    adicionaPixel(4, 6);
    adicionaPixelArmadilha(4, 5, 550);
    adicionaPixelArmadilha(4, 4, 550);
    adicionaPixelArmadilha(4, 3, 550);
    adicionaPixelArmadilha(5, 3, 550);
    adicionaPixel(6, 3);
    adicionaPixel(7, 3);
    adicionaPixel(7, 4);
    adicionaPixel(8, 4);
    adicionaPixel(9, 4);
    adicionaPixel(10, 4);
    adicionaPixel(11, 4);
    adicionaPixel(12, 4);
    adicionaPixel(12, 5);
    adicionaPixel(13, 5);
    adicionaPixel(14, 5);
    adicionaPixel(14, 6);
    adicionaPixel(15, 6);
    adicionaPixel(15, 7);
    adicionaPixel(16, 7);
    adicionaPixel(17, 7);
    adicionaPixel(18, 7);
    adicionaPixel(18, 6);
    adicionaPixel(18, 5);
    adicionaPixel(19, 5);
    adicionaPixel(19, 4);
    adicionaPixel(19, 3);


    adicionaPixel(20, 1, "lightgreen");
    adicionaPixel(20, 2, "lightgreen");
    adicionaPixel(19, 1, "lightgreen");
    adicionaPixel(19, 2, "lightgreen");
}

//==============--- FINAL CARREGAJOGO NÍVEL 3 ---==============//
//-------------------------------------------------------------//

//------------------------------------------------------------//
//=============--- INÍCIO CARREGAJOGO NÍVEL 3 ---=============//

function carregaJogo4() {
    debugger
    limpaGrid("jogo")
    jogo.style.display = 'grid';
    guia.style.display = "none"
    jogo.style.gridTemplateRows = "repeat(20, auto)";
    jogo.style.gridTemplateColumns = "repeat(20, auto)";
    inicio.style.display = 'none';

    adicionaPixel(2, 1, "lightseagreen");
    adicionaPixel(1, 1, "lightseagreen");
    adicionaPixel(2, 2, "lightseagreen");
    adicionaPixel(1, 2, "lightseagreen");

    adicionaPixel(3, 2);
    adicionaPixel(4, 2);
    adicionaPixel(5, 2);
    adicionaPixel(6, 2);
    adicionaPixel(7, 2);
    adicionaPixel(8, 2);
    adicionaPixel(9, 2);
    adicionaPixel(10, 2);
    adicionaPixel(11, 2);
    adicionaPixel(11, 3);
    adicionaPixel(12, 3);
    adicionaPixel(13, 3);
    adicionaPixel(13, 2);
    adicionaPixel(13, 1);
    adicionaPixel(14, 1);
    adicionaPixel(15, 1);
    adicionaPixel(16, 1);
    adicionaPixel(17, 1);
    adicionaPixel(18, 1);
    adicionaPixelMovel(19, 1, 15, 1);
    adicionaPixel(20, 3);
    adicionaPixel(20, 4);
    adicionaPixel(19, 4);
    adicionaPixel(18, 4);
    adicionaPixel(17, 4);
    adicionaPixel(16, 4);
    adicionaPixel(16, 5);
    adicionaPixel(16, 6);
    adicionaPixel(15, 6);
    adicionaPixel(14, 6);
    adicionaPixel(13, 6);
    adicionaPixel(13, 5);
    adicionaPixel(12, 5);
    adicionaPixel(11, 5);
    adicionaPixelArmadilha(10, 5, 550,);
    adicionaPixelArmadilha(9, 5, 550,);
    adicionaPixelArmadilha(8, 5, 550,);
    adicionaPixelArmadilha(8, 6, 550,);
    adicionaPixel(8, 7);
    adicionaPixelArmadilha(7, 7, 550, 550);
    adicionaPixelArmadilha(6, 7, 550, 550);
    adicionaPixelArmadilha(6, 6, 550, 550);
    adicionaPixelArmadilha(6, 5, 550, 550);
    adicionaPixel(6, 4);
    adicionaPixel(5, 4);
    adicionaPixel(4, 4);
    adicionaPixelArmadilha(3, 4, 550,);
    adicionaPixelArmadilha(3, 5, 550,);
    adicionaPixelArmadilha(3, 6, 550,);
    adicionaPixelArmadilha(3, 7, 550,);
    adicionaPixelArmadilha(3, 8, 550,);
    adicionaPixel(4, 8);
    adicionaPixel(4, 9);
    adicionaPixel(4, 10);
    adicionaPixel(5, 10);
    adicionaPixel(6, 10);
    adicionaPixel(6, 11);
    adicionaPixel(7, 11);
    adicionaPixel(8, 11);
    adicionaPixel(9, 11);
    adicionaPixel(10, 11);
    adicionaPixel(10, 10, "lightblue");
    adicionaPixelMovel(10, 10, 10, 2);
    adicionaPixel(11, 10, "black");
    adicionaPixel(12, 10, "yellow");
    adicionaPixel(13, 10, "black");
    adicionaPixel(14, 10, "yellow");
    adicionaPixel(14, 11, "black");
    adicionaPixel(14, 12, "yellow");
    adicionaPixel(15, 12, "black");
    adicionaPixel(16, 12, "yellow");
    adicionaPixel(17, 12, "black");
    adicionaPixel(18, 12, "yellow");
    adicionaPixel(18, 13, "black");
    adicionaPixel(18, 14, "yellow");
    adicionaPixel(18, 15, "lightblue");

    adicionaPixel(1, 20, "lightgreen");
    adicionaPixel(2, 20, "lightgreen");
    adicionaPixel(1, 19, "lightgreen");
    adicionaPixel(2, 19, "lightgreen");
}



//==============--- FINAL CARREGAJOGO NÍVEL 3 ---==============//
//-------------------------------------------------------------//


function enviarResposta() {

    var url = window.location.href;

    var proximaUrl = url.split('/');

    proximaUrl.pop();

    proximaUrl = proximaUrl.join('/');

    console.log("proximaUrl", proximaUrl)

    window.location.href = proximaUrl + '/pagina5.html';
}

document.addEventListener('keypress', function (evento) {

    if (evento.key === "Enter") {

        const botaoEnter = document.querySelector('#botaoResposta');

        botaoEnter.click();

        enviarResposta()

    }
})