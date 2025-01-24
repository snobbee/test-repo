class Countdown {
    constructor(seconds) {
        this.seconds = seconds;
    }

    start() {
        const interval = setInterval(() => {
            if (this.seconds > 0) {
                console.log(this.seconds);
                this.seconds--;
            } else {
                clearInterval(interval);
                console.log('Countdown complete!');
            }
        }, 1000);
    }
}

const countdown = new Countdown(10);
countdown.start();