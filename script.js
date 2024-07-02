let timer;
let isRunning = false;
let [milliseconds, seconds, minutes] = [0, 0, 0];

const display = document.getElementById('display');
const startStopButton = document.getElementById('startStop');
const resetButton = document.getElementById('reset');

startStopButton.addEventListener('click', () => {
    if (!isRunning) {
        startStopButton.textContent = 'Stop';
        timer = setInterval(run, 10);
    } else {
        startStopButton.textContent = 'Start';
        clearInterval(timer);
    }
    isRunning = !isRunning;
});

resetButton.addEventListener('click', () => {
    clearInterval(timer);
    [milliseconds, seconds, minutes] = [0, 0, 0];
    display.textContent = '00:00:00';
    startStopButton.textContent = 'Start';
    isRunning = false;
});

function run() {
    milliseconds += 10;
    if (milliseconds === 1000) {
        milliseconds = 0;
        seconds++;
        if (seconds === 60) {
            seconds = 0;
            minutes++;
        }
    }

    let m = minutes < 10 ? '0' + minutes : minutes;
    let s = seconds < 10 ? '0' + seconds : seconds;
    let ms = milliseconds < 10 ? '00' + milliseconds : milliseconds < 100 ? '0' + milliseconds : milliseconds;

    display.textContent = `${m}:${s}:${ms}`;
}
