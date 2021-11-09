"use strict"

let variats = ['C.A.R', 'G.O.A.T','G.O.A.T'];

function shuffle() {
    variats.sort(function () {
        return Math.random() - Math.random();
    })
}

function fill_cards() {
    let dr1 = document.getElementById('d1b');
    let dr2 = document.getElementById('d2b');
    let dr3 = document.getElementById('d3b');

    dr1.innerHTML = `${variats[0]}`;
    dr2.innerHTML = `${variats[1]}`;
    dr3.innerHTML = `${variats[2]}`;
}

function start() {
    shuffle();
    fill_cards();
}

function open_other() {

}

function unhide() {
    document.getElementById("to_hide").style.visibility = "visible";
}

function open_first(elem) {
    let dvf = elem.id;
    let chnDr = document.getElementById(dvf);
    chnDr.style.backgroundColor = 'yellow';
    //chnDr.style.transform = "rotateY(180deg)";
    let dvb = dvf[0] + dvf[1] + 'b';
    alert(variats[Number(dvf[1])-1]); //Массив перемешивается вместе с надписями на задней части двери, и по массиву можно находить рез-ты за дверью
    //document.getElementById(ff).style.transform = "rotateY(360deg)";
    unhide();
}

