window.onload = iniciar;

function iniciar() {


    sonido1 = document.getElementById("ganar");
    var dineroRandom = Math.floor(Math.random() * (12 - 7 + 1) + 7);

    document.getElementById("botontirar").onclick = tirar;
    document.getElementById("dinero").innerHTML = `${dineroRandom}`;

    for (var i = 0; i < dineroRandom; i++) {
        document.getElementById("fichas").innerHTML += `<img src="pngegg.png">`
    };

    document.getElementById("cruz").onclick = quitarCuadro;

    document.getElementsByClassName("mensajito")[0].onclick = swapear1;
    document.getElementsByClassName("mensajito")[1].onclick = swapear2;
    document.getElementsByClassName("mensajito")[2].onclick = swapear3;
}

function swapear1() {
    let swapear = document.getElementById("cambiar");
    swapear.play();
    primerRandom = Math.floor(Math.random() * (7 - 1 + 1) + 1);
    document.getElementsByClassName("imagen1")[0].innerHTML = `<img src="images/producto${primerRandom}.png">`
    condicionamientos();

    disableMiniButtons();
}
function swapear2() {
    let swapear = document.getElementById("cambiar");
    swapear.play();
    segundoRandom = Math.floor(Math.random() * (7 - 1 + 1) + 1);
    document.getElementsByClassName("imagen2")[0].innerHTML = `<img src="images/producto${segundoRandom}.png">`
    condicionamientos();
    console.log(dineroRestado);
    disableMiniButtons();
}
function disableMiniButtons() {
    if (dineroRestado == 0) {
        document.getElementsByClassName("mensajito")[1].onclick = function () { };
        document.getElementsByClassName("mensajito")[0].onclick = function () { };
        document.getElementsByClassName("mensajito")[2].onclick = function () { };
    }
}

function swapear3() {
    let swapear = document.getElementById("cambiar");
    swapear.play();
    tercerRandom = Math.floor(Math.random() * (7 - 1 + 1) + 1);
    document.getElementsByClassName("imagen3")[0].innerHTML = `<img src="images/producto${tercerRandom}.png">`
    condicionamientos();
    disableMiniButtons();

}

function quitarCuadro() {
    document.getElementById("velo").style.display = "none";
    let valor = Number(document.getElementById("dinero").innerHTML);
    document.getElementById("dinero").innerHTML = `${valor + randomNumero}`;
    for (var i = 0; i < randomNumero; i++) {
        document.getElementById("fichas").innerHTML += `<img src="pngegg.png">`;
    }
    sonido1.pause();
    sonido1.currentTime = 0;
}

var primerRandom = 0;
var segundoRandom = 0;
var tercerRandom = 0;
var randomNumero = 0;

function tirar() {

    primerRandom = Math.floor(Math.random() * (7 - 1 + 1) + 1);
    segundoRandom = Math.floor(Math.random() * (7 - 1 + 1) + 1);
    tercerRandom = Math.floor(Math.random() * (7 - 1 + 1) + 1);
    randomNumero = Math.floor(Math.random() * (5 - 1 + 1) + 1);


    document.getElementsByClassName("imagen1")[0].innerHTML = `<img src="images/producto${primerRandom}.png">`
    document.getElementsByClassName("imagen2")[0].innerHTML = `<img src="images/producto${segundoRandom}.png">`
    document.getElementsByClassName("imagen3")[0].innerHTML = `<img src="images/producto${tercerRandom}.png">`

    condicionamientos();
}

function condicionamientos() {
    if (primerRandom == segundoRandom && primerRandom == tercerRandom) {

        document.getElementById("velo").style.display = "flex";
        document.getElementById("text").innerHTML = `Has ganado ${randomNumero} monedas
    <div id="moneditas"></div>`;
        for (var i = 0; i < randomNumero; i++) {
            document.getElementById("moneditas").insertAdjacentHTML("beforeend", `<img src="pngegg.png">`);
        }

        sonido1.play();

    } else {
        dinero = Number(document.getElementById("dinero").innerHTML);
        dineroRestado = dinero - 1;
        document.getElementById("dinero").innerHTML = `${dineroRestado}`;
        document.getElementById("fichas").innerHTML = ``;
        for (var k = 0; k < dineroRestado; k++) {
            document.getElementById("fichas").innerHTML += `<img src="pngegg.png">`;
        }

        if (dineroRestado == 0) {
            var sonido = document.getElementById("gameover");
            sonido.play();
            document.getElementById("botontirar").onclick = {};
            document.getElementById("botontirar").onclick = function () {
                sonido.play();
            };

        }
    }
    disableMiniButtons();
}

