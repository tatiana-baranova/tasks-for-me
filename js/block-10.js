/// Напишемо клас Timer, який буде запускати та зупиняти відлік часу.//

const startBtn = document.querySelector("button[data-action-start]");
const stopBtn = document.querySelector("button[data-action-stop]");
const clockFace = document.querySelector(".clock-face");

// class Timer{

//     constructor({ onTick }) {
//         this.isActive = false;
//         this.onTick = onTick;
//         this.intervalId = null;
//         this.init();
//     }

    // init() {
    //     const time = this.getTimeComponent(0);
    //     this.onTick(time);
    // }

//     start() {

//         if(this.isActive) {
//             return;
//         }

//         const startTime = Date.now();
//         this.isActive = true;

//         this.intervalId = setInterval(() => {
//             const currentTime = Date.now();
//             const deltaTime = currentTime - startTime;
//             const time = this.getTimeComponent(deltaTime);

//             this.onTick(time);
//         }, 1000)
//     }

//     stop() {
//         clearInterval(this.intervalId);
//         const time = this.getTimeComponent(0);
//         this.onTick(time);
//         this.isActive = false;
        
//     }

//     getTimeComponent(time) {
//         const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 60 * 24)) / (1000 * 60 * 60)));
//         const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
//         const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

//         return { hours, mins, secs };
//     }
//     pad(value) {
//         return String(value).padStart(2, "0");
//     }
// }


// const timer = new Timer({
//     onTick: upDateClockFace
// });

// startBtn.addEventListener("click", timer.start.bind(timer))
// stopBtn.addEventListener("click", timer.stop.bind(timer))

// function upDateClockFace({ hours, mins, secs }) {
//     clockFace.textContent = `${hours}:${mins}:${secs}`;
// }

let isActive = false;
let intervalId = null;

startBtn.addEventListener("click", start);
stopBtn.addEventListener("click", stop)

init();

function start() {

    if (isActive) {
        return;
    }

    const startTime = Date.now();
    isActive = true;

    intervalId = setInterval(() => {
        const currentTime = Date.now();
        const deltaTime = currentTime - startTime;
        const time = getTimeComponent(deltaTime);

        onTick(time);
    }, 1000)
}
function getTimeComponent(time) {
        const hours = pad(Math.floor((time % (1000 * 60 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
        const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

        return { hours, mins, secs };
}
function pad(value) {
        return String(value).padStart(2, "0");
}
    
function onTick({ hours, mins, secs }) {
    clockFace.textContent = `${hours}:${mins}:${secs}`;
}

function stop() {
        clearInterval(intervalId);
        const time = getTimeComponent(0);
        onTick(time);
        isActive = false;
    }

function init() {
        const time = getTimeComponent(0);
        onTick(time);
    }