"use strict"
//DOM elements selection
let lengthUp = document.querySelector("#length-up");
let lengthDown = document.querySelector("#length-down");
let lengthDisplay = document.querySelector("#length-display");
let play = document.querySelector("#play");
let pause = document.querySelector("#pause");
let timeDisplay = document.querySelector("#time-display");
let audio = document.querySelector("audio");
let totalSeconds;
let paused = false;



//Increasing and decreasing the session length
lengthUp.addEventListener("click", () => {
    let plusOne = parseInt(lengthDisplay.innerHTML) + 1;
    lengthDisplay.innerHTML = plusOne;
    timeDisplay.innerHTML = `${lengthDisplay.innerHTML}:00`;
    totalSeconds = parseInt(timeDisplay.innerHTML) * 60;
});
lengthDown.addEventListener("click", () => {
    let minusOne = parseInt(lengthDisplay.innerHTML) - 1;
    lengthDisplay.innerHTML = minusOne;
    timeDisplay.innerHTML = `${lengthDisplay.innerHTML}:00`;
    totalSeconds = parseInt(timeDisplay.innerHTML) * 60;
})


//Start timer

let countdown;

function timer(sec) {
    const now = Date.now();
    const then = now + sec * 1000;
    displayTimeLeft(sec);

    countdown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) / 1000);
        if (secondsLeft < 0) {
            clearInterval(countdown);
            timeDisplay.innerHTML = "Time's up!";
            audio.play();
            return;
        }

        displayTimeLeft(secondsLeft);

    }, 1000);
}

function displayTimeLeft(sec) {
    const min = Math.floor(sec / 60);
    const remainderSec = Math.floor(sec % 60);
    const display = `${min}:${remainderSec < 10 ? "0" : ""}${remainderSec}`;
    timeDisplay.innerHTML = display;

}
//Play button function (if pause was pressed before, continue with the remaining timer)
play.addEventListener("click", () => {
    if (paused) {
        totalSeconds = (parseInt(timeDisplay.innerHTML[0]) * 60) + (parseInt(timeDisplay.innerHTML[2] + timeDisplay.innerHTML[3]));
    }
    timer(totalSeconds)
});

//Pause button function
pause.addEventListener("click", function () {
    clearInterval(countdown);
    paused = true;
});




