let countdown = () => {
    let futureDate = new Date(`1 Jan 2025`);
    let currentDate = new Date();
    let remainingTime = futureDate - currentDate;
    let days = Math.floor(remainingTime / 1000 / 60 / 60 / 24);
    let hours = Math.floor(remainingTime / 1000 / 60 / 60) % 24;
    let minutes = Math.floor(remainingTime / 1000 / 60) % 60;
    let seconds = Math.floor(remainingTime / 1000) % 60;
    document.querySelector('#days').innerText = days;
    document.querySelector('#hours').innerText = hours;
    document.querySelector('#mins').innerText = minutes;
    document.querySelector('#secs').innerText = seconds;
}

setInterval(() => {
    countdown();
    new Audio('Sound1.m4a').play();
    if (document.querySelector('#secs').innerText === '59') {
        new Audio('Sound2.wav').play();
    }
    if (document.querySelector('#mins').innerText === '59') {
        new Audio('Sound3.wav').play();
    }
    if (document.querySelector('#hours').innerText === '23') {
        new Audio('Sound4.wav').play();
    }
}, 1000);