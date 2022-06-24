import {mins, secs, start} from './script.js';
let interval;
export const allowInput = () => {
    mins.disabled = false;
    secs.disabled = false;
};
export const disableInput = () => {
    mins.disabled = true;
    secs.disabled = true;
};
export const isValidTime = () => {
    if (
        mins.value.toString().indexOf('.') != -1 ||
        secs.value.toString().indexOf('.') != -1
    ) {
        return true;
    } else if (
        (mins.value > 0 && mins.value < 60) ||
        (secs.value > 0 && secs.value < 60)
    ) {
        return false;
    } else {
        return true;
    }
};
export const startTimer = () => {
    ring.style.stroke = 'blue';
    start.innerHTML = 'PAUSE';
    interval = setInterval(function() {
        if (mins.value == 0 && secs.value == 0) {
            clearInterval(interval);
            ring.style.stroke = 'red';
            start.innerHTML = 'START';
            mins.value = '00';
            secs.value = '00';
            setTimeout(() => {
                alert('Times up!');
                ring.style.stroke = 'green';
                mins.value = '00';
                secs.value = '05';
            }, 100);
        } else {
            if (secs.value == 0) {
                mins.value = mins.value - 1;
                mins.value = ('0' + mins.value).slice(-2);
                secs.value = '59';
            } else {
                secs.value = secs.value - 1;
                secs.value = ('0' + secs.value).slice(-2);
            }
        }
    }, 1000);
};
export const stopTimer = () => {
    start.innerHTML = 'START';
    ring.style.stroke = 'yellow';
    clearInterval(interval);
};
