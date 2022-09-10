// debugger
//     var fase = 1

//     var inicio = document.getElementById('inicio');
//     var jogo = document.getElementById("jogo");

//     function limpaGrid(idElemento) {
//         const grid = document.getElementById(idElemento);

//         while (grid.firstChild) {
//             grid.removeChild(grid.lastChild);
//         }
//     }


//     function adicionaPixelInicio(x, y) {
//         var pixel1 = document.createElement("div");
//         pixel1.style.gridColumnStart = x;
//         pixel1.style.gridRowStart = y;
//         pixel1.style.backgroundColor = "lightblue";
//         inicio.appendChild(pixel1);
//         pixel1.addEventListener("mouseover", function (e) {
//             debugger

//             if (fase == 1) {
//                 fase++
//                 carregaJogo()
//             } else if (fase == 2) {
//                 fase++
//                 carregaJogo2()
//             }
//             if (fase == 3) {
//                 carregaJogo3()
//             }
//             // if (fase == 4) {

//             // }


//             e.stopPropagation();
//         })
//     }

//     function adicionaPixel(x, y, cor = "white") {
//         if (x >= 14 && y >= 14) {
//             var pxFinal = document.createElement("div");
//             pxFinal.style.gridColumnStart = x;
//             pxFinal.style.gridRowStart = y;
//             pxFinal.style.backgroundColor = cor;
//             console.log("verde")
//             pxFinal.addEventListener("mouseover", function (e) {
//                 mostraInicio()
//                 e.stopPropagation();
//             })
//             jogo.appendChild(pxFinal);

//         } else {
//             var pixel1 = document.createElement("div");
//             pixel1.style.gridColumnStart = x;
//             pixel1.style.gridRowStart = y;
//             pixel1.style.backgroundColor = cor;
//             jogo.appendChild(pixel1);
//             pixel1.addEventListener("mouseover", function (e) {
//                 e.stopPropagation();
//             })

//         }
//     }

//     mostraInicio()

//     function mostraInicio() {
//         debugger
//         jogo.style.display = "none";
//         inicio.style.display = "grid";

//         if (fase == 1) {
//             limpaGrid("inicio");
//             adicionaPixelInicio(1, 1);
//             adicionaPixelInicio(1, 2);
//             adicionaPixelInicio(2, 2);
//             adicionaPixelInicio(2, 1);
//         }
//         if (fase == 2) {
//             limpaGrid("inicio");
//             adicionaPixelInicio(15, 1);
//             adicionaPixelInicio(15, 2);
//             adicionaPixelInicio(14, 2);
//             adicionaPixelInicio(14, 1);
//         }
//         if (fase == 3) {
//             limpaGrid("inicio");
//             adicionaPixelInicio(1, 14);
//             adicionaPixelInicio(2, 15);
//             adicionaPixelInicio(1, 15);
//             adicionaPixelInicio(2, 14);
//         }
//     }

//     var jogo = document.getElementById("jogo");

//     jogo.addEventListener("mouseover", function () {
//         console.log("jogo")
//         // document.location.reload();

//     })


//     //------------------------------------------------------------//
//     //=============--- INÍCIO CARREGAJOGO NÍVEL 1 ---=============//

//     function carregaJogo() {
//         debugger
//         jogo.style.display = 'grid'
//         inicio.style.display = 'none'
//         jogo.classList.add("container_2")
//         adicionaPixel(1, 1, 'lightblue')
//         adicionaPixel(1, 2, 'lightblue')
//         adicionaPixel(2, 1, 'lightblue')
//         adicionaPixel(2, 2, 'lightblue')

//         adicionaPixel(1, 3);
//         adicionaPixel(1, 4);
//         adicionaPixel(1, 5);
//         adicionaPixel(1, 6);
//         adicionaPixel(1, 7);
//         adicionaPixel(2, 7);
//         adicionaPixel(3, 7);
//         adicionaPixel(4, 7);
//         adicionaPixel(5, 7);
//         adicionaPixel(6, 7);
//         adicionaPixel(6, 6);
//         adicionaPixel(6, 5);
//         adicionaPixel(6, 4);
//         adicionaPixel(6, 3);
//         adicionaPixel(6, 2);
//         adicionaPixel(7, 2);
//         adicionaPixel(8, 2);
//         adicionaPixel(8, 3);
//         adicionaPixel(8, 4);
//         adicionaPixel(8, 5);
//         adicionaPixel(8, 6);
//         adicionaPixel(8, 7);
//         adicionaPixel(8, 8);
//         adicionaPixel(8, 9);
//         adicionaPixel(8, 9);
//         adicionaPixel(7, 9);
//         adicionaPixel(6, 9);
//         adicionaPixel(5, 9);
//         adicionaPixel(5, 10);
//         adicionaPixel(5, 11);
//         adicionaPixel(5, 12);
//         adicionaPixel(5, 13);
//         adicionaPixel(6, 13);
//         adicionaPixel(7, 13);
//         adicionaPixel(8, 13);
//         adicionaPixel(9, 13);
//         adicionaPixel(10, 9);
//         adicionaPixel(11, 9);
//         adicionaPixel(12, 9);
//         adicionaPixel(13, 9);
//         adicionaPixel(10, 13);
//         adicionaPixel(10, 12);
//         adicionaPixel(10, 11);
//         adicionaPixel(10, 10);
//         adicionaPixel(13, 10);
//         adicionaPixel(13, 11);
//         adicionaPixel(13, 12);
//         adicionaPixel(13, 13);
//         adicionaPixel(13, 14);

//         adicionaPixel(14, 15, 'lightgreen');
//         adicionaPixel(14, 14, 'lightgreen');
//         adicionaPixel(15, 14, 'lightgreen');
//         adicionaPixel(15, 15, 'lightgreen');
//     }

//     //==============--- FINAL CARREGAJOGO NÍVEL 1 ---==============//
//     //-------------------------------------------------------------//

//     //------------------------------------------------------------//
//     //=============--- INÍCIO CARREGAJOGO NÍVEL 2 ---=============//

//     function carregaJogo2() {
//         debugger
//         limpaGrid("jogo")
//         jogo.style.display = 'grid';
//         inicio.style.display = 'none';
//         jogo.classList.add("container_2");

//         adicionaPixel(15, 1, "lightpink");
//         adicionaPixel(15, 2, "lightpink");
//         adicionaPixel(14, 2, "lightpink");
//         adicionaPixel(14, 1, "lightpink");

//         adicionaPixel(10, 14);
//         adicionaPixel(10, 13);
//         adicionaPixel(10, 12);
//         adicionaPixel(11, 12);
//         adicionaPixel(12, 12);
//         adicionaPixel(13, 12);
//         adicionaPixel(14, 12);
//         adicionaPixel(14, 13);
//         adicionaPixel(15, 3);
//         adicionaPixel(15, 4);
//         adicionaPixel(14, 4);
//         adicionaPixel(13, 4);
//         adicionaPixel(12, 4);
//         adicionaPixel(11, 4);
//         adicionaPixel(11, 5);
//         adicionaPixel(11, 6);
//         adicionaPixel(11, 7);
//         adicionaPixel(11, 8);
//         adicionaPixel(10, 8);
//         adicionaPixel(3, 10);
//         adicionaPixel(4, 10);
//         adicionaPixel(5, 10);
//         adicionaPixel(6, 10);
//         adicionaPixel(7, 10);
//         adicionaPixel(7, 11);
//         adicionaPixel(7, 12);
//         adicionaPixel(7, 13);
//         adicionaPixel(7, 14);
//         adicionaPixel(8, 14);
//         adicionaPixel(9, 14);
//         adicionaPixel(9, 7);
//         adicionaPixel(9, 8);
//         adicionaPixel(9, 6);
//         adicionaPixel(8, 6);
//         adicionaPixel(7, 6);
//         adicionaPixel(6, 6);
//         adicionaPixel(6, 5);
//         adicionaPixel(6, 4);
//         adicionaPixel(6, 3);
//         adicionaPixel(6, 2);
//         adicionaPixel(3, 2);
//         adicionaPixel(3, 3);
//         adicionaPixel(3, 4);
//         adicionaPixel(5, 2);
//         adicionaPixel(4, 2);
//         adicionaPixel(3, 5);
//         adicionaPixel(3, 6);
//         adicionaPixel(3, 7);
//         adicionaPixel(3, 8);
//         adicionaPixel(3, 9);

//         adicionaPixel(14, 15, "lightgreen");
//         adicionaPixel(15, 14, "lightgreen");
//         adicionaPixel(14, 14, "lightgreen");
//         adicionaPixel(15, 15, "lightgreen");
//     }

//     //==============--- FINAL CARREGAJOGO NÍVEL 2 ---==============//
//     //-------------------------------------------------------------//

//      //------------------------------------------------------------//
//     //=============--- INÍCIO CARREGAJOGO NÍVEL 3 ---=============//

//     function carregaJogo2() {
//         debugger
//         limpaGrid("jogo")
//         jogo.style.display = 'grid';
//         inicio.style.display = 'none';
//         jogo.classList.add("container_2");

//         adicionaPixel(15, 1, "lightpink");
//         adicionaPixel(15, 2, "lightpink");
//         adicionaPixel(14, 2, "lightpink");
//         adicionaPixel(14, 1, "lightpink");

//         adicionaPixel(10, 14);
//         adicionaPixel(10, 13);
//         adicionaPixel(10, 12);
//         adicionaPixel(11, 12);
//         adicionaPixel(12, 12);
//         adicionaPixel(13, 12);
//         adicionaPixel(14, 12);
//         adicionaPixel(14, 13);
//         adicionaPixel(15, 3);
//         adicionaPixel(15, 4);
//         adicionaPixel(14, 4);
//         adicionaPixel(13, 4);
//         adicionaPixel(12, 4);
//         adicionaPixel(11, 4);
//         adicionaPixel(11, 5);
//         adicionaPixel(11, 6);
//         adicionaPixel(11, 7);
//         adicionaPixel(11, 8);
//         adicionaPixel(10, 8);
//         adicionaPixel(3, 10);
//         adicionaPixel(4, 10);
//         adicionaPixel(5, 10);
//         adicionaPixel(6, 10);
//         adicionaPixel(7, 10);
//         adicionaPixel(7, 11);
//         adicionaPixel(7, 12);
//         adicionaPixel(7, 13);
//         adicionaPixel(7, 14);
//         adicionaPixel(8, 14);
//         adicionaPixel(9, 14);
//         adicionaPixel(9, 7);
//         adicionaPixel(9, 8);
//         adicionaPixel(9, 6);
//         adicionaPixel(8, 6);
//         adicionaPixel(7, 6);
//         adicionaPixel(6, 6);
//         adicionaPixel(6, 5);
//         adicionaPixel(6, 4);
//         adicionaPixel(6, 3);
//         adicionaPixel(6, 2);
//         adicionaPixel(3, 2);
//         adicionaPixel(3, 3);
//         adicionaPixel(3, 4);
//         adicionaPixel(5, 2);
//         adicionaPixel(4, 2);
//         adicionaPixel(3, 5);
//         adicionaPixel(3, 6);
//         adicionaPixel(3, 7);
//         adicionaPixel(3, 8);
//         adicionaPixel(3, 9);

//         adicionaPixel(14, 15, "lightgreen");
//         adicionaPixel(15, 14, "lightgreen");
//         adicionaPixel(14, 14, "lightgreen");
//         adicionaPixel(15, 15, "lightgreen");
//     }

//     //==============--- FINAL CARREGAJOGO NÍVEL 3 ---==============//
//     //-------------------------------------------------------------//


//     function enviarResposta() {

//         var url = window.location.href;

//         var proximaUrl = url.split('/');

//         proximaUrl.pop();

//         proximaUrl = proximaUrl.join('/');

//         console.log("proximaUrl", proximaUrl)

//         window.location.href = proximaUrl + '/pagina5.html';
//     }

//     document.addEventListener('keypress', function (evento) {

//         if (evento.key === "Enter") {

//             const botaoEnter = document.querySelector('#botaoResposta');

//             botaoEnter.click();

//             enviarResposta()

//         }
//     })
