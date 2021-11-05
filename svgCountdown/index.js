
const timeDisplay = document.querySelector('#duration-input');
const playBtn = document.querySelector('#start-btn');
const pauseBtn = document.querySelector('#pause-btn');
const circle = document.querySelector('circle');

const perimeter = circle.getAttribute('r') * 2 * Math.PI;
circle.setAttribute('stroke-dasharray', perimeter);

let duration;
const timer = new Timer(timeDisplay,playBtn,pauseBtn, {
    onStart(totalDuration){
        console.log('timer started');
        duration = totalDuration;
    },
    onTick(timeRemaining){
        circle.setAttribute('stroke-dashoffset',
            perimeter * timeRemaining / duration - perimeter
        );
    },
    onComplete(){
        console.log('timer complete');
        const audio = new Audio('mixkit-rooster-crowing-in-the-morning-2462.wav')
        audio.play();
    }
});