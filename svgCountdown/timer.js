class Timer {
    constructor(timeDisplay, playBtn, pauseBtn, callbacks) {
        this.timeDisplay = timeDisplay;
        this.playBtn = playBtn;
        this.pauseBtn = pauseBtn;
        if (callbacks) {
            this.onStart = callbacks.onStart;
            this.onTick = callbacks.onTick;
            this.onComplete = callbacks.onComplete;
        }

        this.playBtn.addEventListener('click', this.start);
        this.pauseBtn.addEventListener('click', this.pause);
    }
    start = () => {
        this.onStart && this.onStart(this.timeRemaining);
        this.tick();
        this.interval = setInterval(this.tick, 50,)
    }
    pause = () => {
        clearInterval(this.interval);
    }
    tick = () => {
        if (this.timeRemaining <= 0) {
            this.pause();
            this.onComplete && this.onComplete();
        } else {
            this.timeRemaining -= 0.05;
            this.onTick && this.onTick(this.timeRemaining);
        }
    }
    get timeRemaining() {
        return parseFloat(this.timeDisplay.value);
    }
    set timeRemaining(time) {
        return this.timeDisplay.value = time.toFixed(2)
    }
}