import Countdown from './countdown.js';

const tempoParaONatal = new Countdown('24 December 2019 23:59:59 GMT-0300');
// const tempoParaOAnoNovo = new Countdown('31 December 2019 23:59:59 GMT-0300');
console.log(tempoParaONatal);
let days = document.querySelector(".days"),
    hours = document.querySelector(".hours"),
    minutes = document.querySelector(".minutes"),
    seconds = document.querySelector(".seconds");

setInterval(() => {
  // console.log(tempoParaONatal.total);
  days.innerHTML = tempoParaONatal.total.days;
  hours.innerHTML = tempoParaONatal.total.hours;
  minutes.innerHTML = tempoParaONatal.total.minutes;
  seconds.innerHTML = tempoParaONatal.total.seconds;

}, 1000)