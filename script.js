import Countdown from './countdown.js';

const currentYear = new Date().getFullYear();

const timeFromChristmas = new Countdown(
  `24 December ${currentYear} 23:59:59 GMT-0300`
);
console.log(timeFromChristmas);
let days = document.querySelectorAll('.days'),
  hours = document.querySelector('.hours'),
  minutes = document.querySelector('.minutes'),
  seconds = document.querySelector('.seconds');

setInterval(() => {
  for (let i = 0; i < days.length; i++) {
    days[i].innerHTML = timeFromChristmas.total.days;
  }
  hours.innerHTML = timeFromChristmas.total.hours;
  minutes.innerHTML = timeFromChristmas.total.minutes;
  seconds.innerHTML = timeFromChristmas.total.seconds;
}, 1000);
