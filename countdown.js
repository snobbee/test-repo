function countdown(seconds) {
    let interval = setInterval(() => {
        if (seconds <= 0) {
            clearInterval(interval);
            console.log('Countdown complete!');
        } else {
            console.log(seconds);
            seconds--;
        }
    }, 1000);
}
