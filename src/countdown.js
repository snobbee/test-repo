export const countdown = (seconds) => {
    let timer = seconds;
    const interval = setInterval(() => {
        if (timer <= 0) {
            clearInterval(interval);
            console.log('Countdown finished');
        } else {
            console.log(timer);
            timer--;
        }
    }, 1000);
};