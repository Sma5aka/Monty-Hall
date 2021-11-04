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

function unhide() {
    let hidden = document.getElementsByClassName("to_hide");
    hidden.style.visibility = "visible";
    let nnn = document.getElementsByClassName("df");
    nnn.style.transform = "rotateY(180deg)";
}

