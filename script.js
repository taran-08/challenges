const mins = document.querySelector(".mins");
const secs = document.querySelector(".secs");
const start = document.querySelector(".start");
const setting = document.querySelector(".settings");
var interval;

function settingOf() {
    stopTimer();
    allowInput();
}
function allowInput() {
    mins.disabled = false;
    secs.disabled = false;
}
function disableInput() {
    mins.disabled = true;
    secs.disabled = true;
}

function startStop() {
    disableInput();
    if (start.innerHTML === "START") {
        if ((mins.value > 60 && secs.value > 60) || (mins.value < 0 && secs.value < 0)) {
            alert("Enter the valid time");
            ring.style.stroke = "green";
            mins.value = "00";
            secs.value = "05";
        }
        else if ((mins.value == 00 && secs.value == 0) || (mins.value == 0 && secs.value == 0)) {
            alert("Enter the valid time");
            ring.style.stroke = "green";
            mins.value = "00";
            secs.value = "05";
        }
        else {
            startTimer();
        }
    }
    else {
        stopTimer();
    }
}

function startTimer() {

    ring.style.stroke = "blue";
    start.innerHTML = "PAUSE";
    interval = setInterval(function () {
        if (mins.value == 0 && secs.value == 0) {
            clearInterval(interval);
            ring.style.stroke = "red";
            start.innerHTML = "START";
            mins.value = "00";
            secs.value = "00";
            setTimeout(() => {
                alert("Times up!");
                ring.style.stroke = "green";
                mins.value = "00";
                secs.value = "05";
            }, 100)
        }
        else {
            if (secs.value == 0) {
                mins.value = mins.value - 1;
                mins.value = ('0' + mins.value).slice(-2);
                secs.value = "59";

            }
            else {
                secs.value = secs.value - 1;
                secs.value = ('0' + secs.value).slice(-2);
            }
        }
    }, 1000);

}
function stopTimer() {
    start.innerHTML = "START";
    ring.style.stroke = "yellow";
    clearInterval(interval);

}
