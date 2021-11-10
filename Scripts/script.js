"use strict"

let variats = ['C.A.R', 'G.O.A.T','G.O.A.T'];
let op_dr = [false, false, false];

function shuffle() {
    variats.sort(function () {
        return Math.random() - Math.random();
    })
}

function fill_cards() {
    let dr1 = document.getElementById('d1b');
    let dr2 = document.getElementById('d2b');
    let dr3 = document.getElementById('d3b');

    function a() {
        if (variats[0] == 'C.A.R') {
            let div1 = document.createElement('img');
            div1.className = "car";
            div1.src = "Media/car2.jpg";
            dr1.appendChild(div1);
        } else if (variats[0] == 'G.O.A.T') {
            let div1 = document.createElement('img');
            div1.className = "pictr";
            div1.src = "Media/pici.jpg";
            dr1.appendChild(div1);
        }
    }
    a();
    function b () {
        if (variats[1] == 'C.A.R') {
            let div2 = document.createElement('img');
            div2.className = "car";
            div2.src = "Media/car2.jpg";
            dr2.appendChild(div2);
        } else if (variats[1] == 'G.O.A.T') {
            let div2 = document.createElement('img');
            div2.className = "pictr";
            div2.src = "Media/pici.jpg";
            dr2.appendChild(div2);
        }
    }
    b();
    function c() {
        if (variats[2] == 'C.A.R') {
            let div3 = document.createElement('img');
            div3.className = "car";
            div3.src = "Media/car2.jpg";
            dr3.appendChild(div3);
        } else if (variats[2] == 'G.O.A.T') {
            let div3 = document.createElement('img');
            div3.className = "pictr";
            div3.src = "Media/pici.jpg";
            dr3.appendChild(div3);
        }
    }
    c();

/*    dr1.innerHTML = `${variats[0]}`;
    dr2.innerHTML = `${variats[1]}`;
    dr3.innerHTML = `${variats[2]}`;*/
}

function start() {
    shuffle();
    fill_cards();
}

function restart() {
    document.getElementById("reset").style.visibility = "hidden";
    document.getElementById("d1b").innerHTML = '';
    document.getElementById("d2b").innerHTML = '';
    document.getElementById("d3b").innerHTML = '';
    document.getElementById("d1f").style.backgroundColor = "limegreen";
    document.getElementById("d2f").style.backgroundColor = "limegreen";
    document.getElementById("d3f").style.backgroundColor = "limegreen";
    for (let i = 0; i < 3; i++) {
        op_dr[i] = false;
    }
    unhide(2);
    op_all(0);
    shuffle();
    fill_cards();
    able = false;
    able_but = false;
}

function unhide(vr) {
    if (vr == 1) {
        document.getElementById("to_hide").style.visibility = "visible";
    } else if (vr == 2) {
        document.getElementById("to_hide").style.visibility = "hidden";
    }
}

let able = false;
function open_first(elem) {
    if (!able) {
        let dvf = elem.id;
        op_dr[Number(dvf[1])-1] = true;
        let chnDr = document.getElementById(dvf);
        chnDr.style.backgroundColor = 'yellow';

        dc = dvf;

        if (dvf[1] == 1) {
            if (variats[1] == 'G.O.A.T') {
                document.getElementById('d' + 2 + 'f').style.transform = "rotateY(180deg)";
                document.getElementById('d' + 2 + 'b').style.transform = "rotateY(360deg)";
                op_dr[1] = true;
            } else if (variats[2] == 'G.O.A.T') {
                document.getElementById('d' + 3 + 'f').style.transform = "rotateY(180deg)";
                document.getElementById('d' + 3 + 'b').style.transform = "rotateY(360deg)";
                op_dr[2] = true;
            }
        }
        if (dvf[1] == 2) {
            if (variats[0] == 'G.O.A.T') {
                document.getElementById('d' + 1 + 'f').style.transform = "rotateY(180deg)";
                document.getElementById('d' + 1 + 'b').style.transform = "rotateY(360deg)";
                op_dr[0] = true;
            } else if (variats[2] == 'G.O.A.T') {
                document.getElementById('d' + 3 + 'f').style.transform = "rotateY(180deg)";
                document.getElementById('d' + 3 + 'b').style.transform = "rotateY(360deg)";
                op_dr[2] = true;
            }
        }
        if (dvf[1] == 3) {
            if (variats[0] == 'G.O.A.T') {
                document.getElementById('d' + 1 + 'f').style.transform = "rotateY(180deg)";
                document.getElementById('d' + 1 + 'b').style.transform = "rotateY(360deg)";
                op_dr[0] = true;
            } else if (variats[1] == 'G.O.A.T') {
                document.getElementById('d' + 2 + 'f').style.transform = "rotateY(180deg)";
                document.getElementById('d' + 2 + 'b').style.transform = "rotateY(360deg)";
                op_dr[1] = true;
            }
        }

        /*ÏÎÒÅÍÖÈÀËÜÍÎ ÁÎËÅÅ ÂÅÐÍÛÉ È ÊÎÐÎÒÊÈÉ ÂÀÐÈÀÍÒ (íå ðàáîòàåò(ïîêà))
                            |
                            |
                            |
                            ,
         */
        /*    let hr;
            let i = 0;
            while (i < 3) {
                if (i == dvf[1]) {
                    i++;
                    continue;
                } else if (variats[i] == variats[Number(dvf[1]) - 1]) {
                    hr = i;
                    break;
                }
                i++;
            }
            let other1 = 'd' + hr + 'f';
            let other2 = 'd' + hr + 'b';*/

        /*    document.getElementById(other1).style.transform = "rotateY(180deg)";
            document.getElementById(other2).style.transform = "rotateY(360deg)";*/

        unhide(1);
        able = true;
    }
}

function op_all(vr) {
    vr = Number(vr);
    if (vr == 0) {
        for (let i = 1; i <= 3; i++) {
            document.getElementById('d' + i + 'f').style.transform = "rotateY(0deg)";
            document.getElementById('d' + i + 'b').style.transform = "rotateY(180deg)";
        }
    } else if (vr == 1) {
        for (let i = 1; i <= 3; i++) {
            document.getElementById('d'+i+'f').style.transform = "rotateY(180deg)";
            document.getElementById('d' + i + 'b').style.transform = "rotateY(360deg)";
        }
    }
}

let able_but = false;
let dc;
function open_second(elem) {
    if (!able_but) {
        let butt = elem.id;
        if (butt == "no") {
            if ((variats[Number(dc[1]) - 1]) == "C.A.R") {
                op_all(1);
                alert("YOU WIN!");
                able_but = true;
                unhide(2);
                document.getElementById("reset").style.visibility = "visible";
                return;
            } else if ((variats[Number(dc[1]) - 1]) == "G.O.A.T") {
                op_all(1);
                alert("YOU LOSE!");
                able_but = true;
                unhide(2);
                document.getElementById("reset").style.visibility = "visible";
                return;
            }
        } else if (butt == "yes") {
            let door;
            for (let i = 0; i < 3; i++) {
                if (op_dr[i] == false) {
                    door = i;
                }
            }
            if (variats[door] == "C.A.R") {
                op_all(1);
                alert("YOU WIN!");
                able_but = true;
                unhide(2);
                document.getElementById("reset").style.visibility = "visible";
                return;
            } else if (variats[door] == "G.O.A.T") {
                op_all(1);
                alert("YOU LOSE!");
                able_but = true;
                unhide(2);
                document.getElementById("reset").style.visibility = "visible";
                return;
            }
        }
    }
}