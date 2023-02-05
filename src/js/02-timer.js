import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';
const input = document.getElementById('datetime-picker');
let intervalId = null;
const daysEl = document.querySelector('[data-days]');
const hoursEl = document.querySelector('[data-hours]');
const minutesEl = document.querySelector('[data-minutes]');
const secondsEl = document.querySelector('[data-seconds]');
const startBtn = document.querySelector('button[data-start]');
startBtn.addEventListener('click', onTimerStart);
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose([selectedDates]) {
    onPreventPassedDates(selectedDates);
  },
};

flatpickr(input, options);

function onTimerStart() {
  const chosenDate = new Date(input.value).getTime();
  intervalId = setInterval(() => {
    const difference = chosenDate - Date.now();
    if (difference < 1000) {
      clearInterval(intervalId);
      return;
    }
    const date = convertMs(difference);
    onTimerTime(date);
  }, 1000);
  console.log(chosenDate);
}

function onTimerTime({
  days = '00',
  hours = '00',
  minutes = '00',
  seconds = '00',
} = {}) {
  daysEl.textContent = addLeadingZero(days);
  hoursEl.textContent = addLeadingZero(hours);
  minutesEl.textContent = addLeadingZero(minutes);
  secondsEl.textContent = addLeadingZero(seconds);
}

function onPreventPassedDates(selectedDates) {
  const result = selectedDates < Date.now();
  startBtn.disabled = result;
  if (result) {
    Notiflix.Notify.info('Please choose a date in the future');
    clearInterval(intervalId);
    onTimerTime();
  }
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, 0);
}
