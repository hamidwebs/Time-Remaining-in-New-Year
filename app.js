let countdown = () => {
    let now = new Date();
    let nextYear = now.getFullYear() + 1;
    let futureDate = new Date(`1 Jan ${nextYear} 00:00:00`);
    let remainingTime = futureDate - now;

    let days = Math.floor(remainingTime / 1000 / 60 / 60 / 24);
    let hours = Math.floor((remainingTime / 1000 / 60 / 60) % 24);
    let minutes = Math.floor((remainingTime / 1000 / 60) % 60);
    let seconds = Math.floor((remainingTime / 1000) % 60);

    document.querySelector('#days').innerText = days;
    document.querySelector('#hours').innerText = hours;
    document.querySelector('#mins').innerText = minutes;
    document.querySelector('#secs').innerText = seconds;

    return { seconds, minutes, hours }; // Return current time parts for sound logic
};

setInterval(() => {
    let { seconds, minutes, hours } = countdown();

    // Play every second tick sound
    new Audio('Sound1.m4a').play();

    // Play sound at specific time triggers
    if (seconds === 59) {
        new Audio('Sound2.wav').play();
    }
    if (minutes === 59 && seconds === 59) { // More precise: end of the hour
        new Audio('Sound3.wav').play();
    }
    if (hours === 23 && minutes === 59 && seconds === 59) { // More precise: end of the day
        new Audio('Sound4.wav').play();
    }
}, 1000);
