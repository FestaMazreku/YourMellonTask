var h1 = document.getElementsByTagName('h1')[0],
    start = document.getElementById('start'),
    stop = document.getElementById('stop'),
    reset = document.getElementById('reset'),
    milli = 0, seconds = 0,
    t;

function add() {
    milli += 10;
    if (milli >= 1000) {
        milli = 0;
        seconds++;
    }

    h1.textContent = (seconds > 9 ? seconds : "0" + seconds) + "." + (milli > 90 ? milli : "0" + milli);
    timer();
}
function timer() {
    t = setTimeout(add, 10);
}
timer();


/* Start button */
start.onclick = function () {
    if (!t) timer();
}

/* Stop button */
stop.onclick = function () {
    clearTimeout(t);
    t = null;
}

/* Reset button */
reset.onclick = function () {
    h1.textContent = "00.000";
    milli = 0; seconds = 0;
}