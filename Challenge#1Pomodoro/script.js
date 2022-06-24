import {
    allowInput,
    disableInput,
    isValidTime,
    startTimer,
    stopTimer,
} from './util.js';
export const mins = document.querySelector('.mins');
export const secs = document.querySelector('.secs');
export const start = document.querySelector('.start');
export const setting = document.querySelector('.settings');

const settingOf = () => {
    stopTimer();
    allowInput();
};
const startStop = () => {
    disableInput();
    if (start.innerHTML === 'START') {
        if (isValidTime()) {
            alert('Enter the valid time');
            document.ring.style.stroke = 'green';
            mins.value = '00';
            secs.value = '05';
        } else {
            startTimer();
        }
    } else {
        stopTimer();
    }
};

start.addEventListener('click', startStop);
setting.addEventListener('click', settingOf);
