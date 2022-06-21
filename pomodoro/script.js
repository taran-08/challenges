import { allowInput, disableInput, isValidTime, startTimer, stopTimer } from "./util.js";
export let mins = document.querySelector(".mins");
export let secs = document.querySelector(".secs");
export let start = document.querySelector(".start");
export let setting = document.querySelector(".settings");
let interval;

const settingOf = () => {
    stopTimer();
    allowInput();
}
const startStop = () => {
    disableInput();
    if (start.innerHTML === "START") {
        if (isValidTime()) {
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

start.addEventListener("click", startStop);
setting.addEventListener("click", settingOf);