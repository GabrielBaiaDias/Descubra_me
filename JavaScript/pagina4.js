var fase = 4


    var input = document.getElementById("input");

    var guia = document.getElementById("guia");
    var inicio = document.getElementById('inicio');
    var jogo = document.querySelector("#jogo");

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

            if (fase == 1) {
                limpaGrid("jogo");
                carregaJogo()
            } else if (fase == 2) {
                limpaGrid("jogo");
                carregaJogo2()
            } else if (fase == 3) {
                limpaGrid("jogo");
                carregaJogo3()
            } else if (fase == 4) {
                limpaGrid("jogo");
                carregaJogo4()
            } else if (fase == 5) {
                limpaGrid("jogo");
                // carregaJogo5()
                enviarResposta()
            }


            e.stopPropagation();
        })
    }

    function adicionaPixel(x, y, cor = "white") {
        
        if (fase <= 2) {
            if (x >= 14 && y >= 14) {
                var pxFinal = document.createElement("div");
                pxFinal.style.gridColumnStart = x;
                pxFinal.style.gridRowStart = y;
                pxFinal.style.backgroundColor = cor;
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

        if (fase == 5) {
            if (x == 19 && y == 2 ||
                x == 20 && y == 2 ||
                x == 19 && y == 1 ||
                x == 20 && y == 1) {
                var pxFinal = document.createElement("div");
                pxFinal.style.gridColumnStart = x;
                pxFinal.style.gridRowStart = y;
                pxFinal.style.backgroundColor = cor;
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
            var interval = setInterval(function () {
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

        let pixelAndado = 0;
        let posX = 0;
        let posY = 0;
        var pos = 0;

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

        // elemento.innerText = elemento.offsetWidth // <<== Para saber qual ?? a largura do elemento.

        // elemento.innerText = elemento.offsetHeight // <<== Para saber qual ?? a altura do elemento.

        if (fase == 3) {

            pixelAndado = 0
            pos = 0

            var interval = setInterval(function () {

                pixelAndado >= 163 ? pos-- : pos++

                if (pixelAndado == 324) {
                    pixelAndado = 0
                }

                pixelAndado++;
                pixel1.style.left = pos + "px";

            }, tempoMove);
            pixel1.addEventListener("mouseover", function (e) {
                e.stopPropagation();
            })

        }
        if (fase == 4) {
            var partes = parte
            if (partes == 1) {

                pixelAndado = 26
                posX = 0
                posY = 0

                var interval = setInterval(function () {
                    

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

                posX = 0
                posY = 0
                pixelAndado = 0

                var interval = setInterval(function () {
                    var vaiVolta = true

                    if (pixelAndado >= 0 && pixelAndado < 108 || pixelAndado >= 162 && pixelAndado < 270) {
                        posX++
                        pixel1.style.left = posX + "px";

                    }

                    if (pixelAndado >= 108 && pixelAndado < 162 || pixelAndado >= 270 && pixelAndado <= 351) {
                        posY++
                        pixel1.style.top = posY + "px";
                    }

                    if (pixelAndado == 165) {
                        
                        fase--
                        adicionaPixelMovel(10, 10, 20, 2);
                        fase++
                    }

                    if (pixelAndado == 351) {
                        jogo.removeChild(pixel1);
                    }

                    pixelAndado++

                }, tempoMove)

                pixel1.addEventListener("mouseover", function (e) {
                    e.stopPropagation();
                })

            }
        }
    }

    mostraInicio()

    function mudaInicioGridTemplate(gridTemplate) {

        inicio.style.gridTemplateRows = `repeat(${gridTemplate}, auto)`;
        inicio.style.gridTemplateColumns = `repeat(${gridTemplate}, auto)`;
    }

    function mostraInicio() {
        
        jogo.style.display = "none";
        inicio.style.display = "grid";
        guia.style.display = "block"

        if (fase == 1) {
            limpaGrid("inicio");
            mudaInicioGridTemplate(15);
            adicionaPixelInicio(1, 1);
            adicionaPixelInicio(1, 2);
            adicionaPixelInicio(2, 2);
            adicionaPixelInicio(2, 1);
        }
        if (fase == 2) {
            limpaGrid("inicio");
            mudaInicioGridTemplate(15);
            adicionaPixelInicio(15, 1);
            adicionaPixelInicio(15, 2);
            adicionaPixelInicio(14, 2);
            adicionaPixelInicio(14, 1);
        }
        if (fase == 3) {
            limpaGrid("inicio");
            mudaInicioGridTemplate(20);
            adicionaPixelInicio(1, 19);
            adicionaPixelInicio(2, 20);
            adicionaPixelInicio(1, 20);
            adicionaPixelInicio(2, 19);
        }
        if (fase == 4) {
            limpaGrid("inicio");
            mudaInicioGridTemplate(20);
            adicionaPixelInicio(1, 2);
            adicionaPixelInicio(2, 2);
            adicionaPixelInicio(1, 1);
            adicionaPixelInicio(2, 1);
        }
        if (fase == 5) {
            limpaGrid("inicio");
            guia.style.padding = 2 + "px"
            guia.innerHTML = "<h4>Mais Atualiza????es em breve!</h4>";
            mudaInicioGridTemplate(20);
            adicionaPixelInicio(19, 20);
            adicionaPixelInicio(20, 19);
            adicionaPixelInicio(20, 20);
            adicionaPixelInicio(19, 19);
        }

        if (fase == 0) {
            fase++
        }
    }

    var jogo = document.getElementById("jogo");

    jogo.addEventListener("mouseover", function () {
        //document.location.reload(); //  <<<<<<==<<==<===================
        if (fase >= 1) {
            fase = fase - 2
        }
        mostraInicio()
    })

    //------------------------------------------------------------//
    //=============--- IN??CIO CARREGAJOGO N??VEL 1 ---=============//

    function carregaJogo() {
        jogo.style.display = 'grid'
        guia.style.display = "none"
        inicio.style.display = 'none'
        jogo.style.gridTemplateRows = "repeat(15, auto)";
        jogo.style.gridTemplateColumns = "repeat(15, auto)";
        jogo.classList.add("container_2")
        adicionaPixel(1, 1, 'lightblue')
        adicionaPixel(1, 2, 'lightblue')
        adicionaPixel(2, 1, 'lightblue')
        adicionaPixel(2, 2, 'lightblue')
jogo
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
        fase++
    }

    //==============--- FINAL CARREGAJOGO N??VEL 1 ---==============//
    //-------------------------------------------------------------//

    //------------------------------------------------------------//
    //=============--- IN??CIO CARREGAJOGO N??VEL 2 ---=============//

    function carregaJogo2() {

        limpaGrid("jogo")
        jogo.style.display = 'grid';
        guia.style.display = "none"
        inicio.style.display = 'none';
        jogo.style.gridTemplateRows = "repeat(15, auto)";
        jogo.style.gridTemplateColumns = "repeat(15, auto)";

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

        fase++
    }

    //==============--- FINAL CARREGAJOGO N??VEL 2 ---==============//
    //-------------------------------------------------------------//

    //------------------------------------------------------------//
    //=============--- IN??CIO CARREGAJOGO N??VEL 3 ---=============//

    function carregaJogo3() {

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
        adicionaPixelMovel(5, 19, 13);
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

        fase++
    }

    //==============--- FINAL CARREGAJOGO N??VEL 3 ---==============//
    //-------------------------------------------------------------//

    //------------------------------------------------------------//
    //=============--- IN??CIO CARREGAJOGO N??VEL 4 ---=============//

    function carregaJogo4() {

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
        adicionaPixelMovel(10, 10, 20, 2);
        adicionaPixel(14, 10, "rgba(0, 0, 255, 0.100)");
        adicionaPixel(14, 12, "rgba(0, 0, 255, 0.100)");
        adicionaPixel(18, 12, "rgba(0, 0, 255, 0.100)");
        adicionaPixel(18, 15, "lightblue");
        adicionaPixel(18, 16);
        adicionaPixel(18, 17);
        adicionaPixel(18, 18);
        adicionaPixel(17, 18);
        adicionaPixel(16, 18);
        adicionaPixel(15, 18);
        adicionaPixel(15, 17);
        adicionaPixel(15, 16);
        adicionaPixel(14, 16);
        adicionaPixel(13, 16);
        adicionaPixel(13, 15);
        adicionaPixelArmadilha(12, 15, 550);
        adicionaPixelArmadilha(11, 15, 550);
        adicionaPixelArmadilha(10, 15, 550);
        adicionaPixelArmadilha(9, 15, 550);
        adicionaPixelArmadilha(8, 15, 550);
        adicionaPixel(7, 15);
        adicionaPixel(7, 16);
        adicionaPixel(6, 16);
        adicionaPixel(6, 17);
        adicionaPixel(6, 18);
        adicionaPixel(6, 19);
        adicionaPixel(5, 19);
        adicionaPixel(4, 19);
        adicionaPixel(3, 19);

        adicionaPixel(1, 20, "lightgreen");
        adicionaPixel(2, 20, "lightgreen");
        adicionaPixel(1, 19, "lightgreen");
        adicionaPixel(2, 19, "lightgreen");

        fase++
    }

    //==============--- FINAL CARREGAJOGO N??VEL 4 ---==============//
    //-------------------------------------------------------------//

    //------------------------------------------------------------//
    //=============--- IN??CIO CARREGAJOGO N??VEL 4 ---=============//

    // function carregaJogo5() {
    //     debugger
    //     limpaGrid("jogo")
    //     jogo.style.display = 'grid';
    //     guia.style.display = "none"
    //     jogo.style.gridTemplateRows = "repeat(20, auto)";
    //     jogo.style.gridTemplateColumns = "repeat(20, auto)";
    //     inicio.style.display = 'none';

    //     adicionaPixel(20, 19, "lightseagreen");
    //     adicionaPixel(19, 19, "lightseagreen");
    //     adicionaPixel(20, 20, "lightseagreen");
    //     adicionaPixel(19, 20, "lightseagreen");

    //     adicionaPixel(18, 19);
    //     adicionaPixel(17, 19);
    //     adicionaPixel(16, 19);
    //     adicionaPixel(15, 19);
    //     adicionaPixel(14, 19);
    //     adicionaPixel(13, 19);
    //     adicionaPixel(12, 19);
    //     adicionaPixel(12, 18);
    //     adicionaPixel(12, 17);
    //     adicionaPixel(11, 17);
    //     adicionaPixel(10, 17);
    //     adicionaPixel(9, 17);
    //     adicionaPixel(8, 17);
    //     adicionaPixel(7, 17);
    //     adicionaPixel(6, 17);
    //     adicionaPixel(5, 17);
    //     adicionaPixel(4, 17);
    //     adicionaPixel(4, 16);
    //     adicionaPixel(4, 15);
    //     adicionaPixel(4, 14);
    //     adicionaPixel(4, 13);
    //     adicionaPixel(4, 12);
    //     adicionaPixel(5, 12);
    //     adicionaPixel(6, 12);
    //     adicionaPixel(7, 12);
    //     adicionaPixel(8, 12);
    //     adicionaPixel(9, 12);
    //     adicionaPixel(10, 12);
    //     adicionaPixel(11, 12);
    //     adicionaPixel(12, 12);
    //     adicionaPixel(13, 12);
    //     adicionaPixel(14, 12);
    //     adicionaPixel(15, 12);
    //     adicionaPixel(15, 11);
    //     adicionaPixel(15, 10);
    //     adicionaPixel(15, 9);
    //     adicionaPixel(14, 9);
    //     adicionaPixel(13, 9);
    //     adicionaPixel(12, 9);
    //     adicionaPixel(11, 9);
    //     adicionaPixel(10, 9);
    //     adicionaPixel(10, 8);
    //     adicionaPixel(10, 7);
    //     adicionaPixel(10, 6);
    //     adicionaPixel(10, 5);
    //     adicionaPixel(11, 5);
    //     adicionaPixel(12, 5);
    //     adicionaPixel(13, 5);
    //     adicionaPixel(14, 5);
    //     adicionaPixel(15, 5);
    //     adicionaPixel(16, 5);
    //     adicionaPixel(17, 5);
    //     adicionaPixel(18, 5);
    //     adicionaPixel(18, 4);
    //     adicionaPixel(18, 3);
    //     adicionaPixel(18, 2);

    //     adicionaPixel(19, 2, "lightgreen");
    //     adicionaPixel(20, 2, "lightgreen");
    //     adicionaPixel(19, 1, "lightgreen");
    //     adicionaPixel(20, 1, "lightgreen");
    //     fase++
    // }

    //==============--- FINAL CARREGAJOGO N??VEL 4 ---==============//
    //-------------------------------------------------------------//

    function enviarResposta() {

        var url = window.location.href;

        var proximaUrl = url.split('/');

        proximaUrl.pop();

        proximaUrl = proximaUrl.join('/');

        window.location.href = proximaUrl + '/pagina5.html';
    }

    document.addEventListener('keypress', function (evento) {

        if (evento.key === "Enter") {

            const botaoEnter = document.querySelector('#botaoResposta');

            botaoEnter.click();

            enviarResposta()

        }
    })