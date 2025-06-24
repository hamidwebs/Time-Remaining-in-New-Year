// Select the year element to update automatically
const yearElement = document.querySelector('.year');

// Get next year
const now = new Date();
const nextYear = now.getFullYear() + 1;
yearElement.innerText = nextYear;

let soundTick = new Audio('Sound1.m4a');
let soundMinute = new Audio('Sound2.wav');
let soundHour = new Audio('Sound3.wav');
let soundDay = new Audio('Sound4.wav');

let countdown = () => {
    let currentDate = new Date();
    let futureDate = new Date(`1 Jan ${nextYear} 00:00:00`);
    let remainingTime = futureDate - currentDate;

    let days = Math.floor(remainingTime / 1000 / 60 / 60 / 24);
    let hours = Math.floor((remainingTime / 1000 / 60 / 60) % 24);
    let minutes = Math.floor((remainingTime / 1000 / 60) % 60);
    let seconds = Math.floor((remainingTime / 1000) % 60);

    document.querySelector('#days').innerText = days;
    document.querySelector('#hours').innerText = hours;
    document.querySelector('#mins').innerText = minutes;
    document.querySelector('#secs').innerText = seconds;

    return { seconds, minutes, hours };
};

setInterval(() => {
    let { seconds, minutes, hours } = countdown();

    // Play tick sound every second
    soundTick.play();

    // Play special sounds at specific times
    if (seconds === 59) {
        soundMinute.play();
    }
    if (minutes === 59 && seconds === 59) {
        soundHour.play();
    }
    if (hours === 23 && minutes === 59 && seconds === 59) {
        soundDay.play();
    }

}, 1000);
