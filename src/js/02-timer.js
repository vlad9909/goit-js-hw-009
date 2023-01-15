import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputRef = document.querySelector('#datetime-picker');
const btnRef = document.querySelector('[data-start]');
const daysRef = document.querySelector('[data-days]');
const hoursRef = document.querySelector('[data-hours]');
const minutesRef = document.querySelector('[data-minutes]');
const secondsRef = document.querySelector('[data-seconds]');
const spanRef = document.querySelectorAll('.label');
const timerRef = document.querySelector('.timer');
const valueRef = document.querySelectorAll('.value');
btnRef.setAttribute('disabled', true);

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < new Date()) {
      alert('Please choose a date in the future');
      btnRef.setAttribute('disabled', true);
    } else {
      btnRef.removeAttribute('disabled');
    }
  },
};

const calendar = flatpickr(inputRef, options);

btnRef.addEventListener('click', onBtnStart);

function onBtnStart() {
  timerRef.style.display = 'flex';
  spanRef.forEach(elem => {
    elem.style.fontSize = '50px';
    elem.style.color = getRandomHexColor();
  });
  valueRef.forEach(elem => {
    elem.style.fontSize = '50px';
    elem.style.color = getRandomHexColor();
  });

  const interval = setInterval(() => {
    const startTime = calendar.selectedDates[0];
    const deltaTime = startTime - new Date();
    // console.log(deltaTime);
    if (deltaTime < 0) {
      clearInterval(interval);
    }
    const { days, hours, minutes, seconds } = convertMs(deltaTime);
    daysRef.textContent = addLeadingZero(days);
    hoursRef.textContent = addLeadingZero(hours);
    minutesRef.textContent = addLeadingZero(minutes);
    secondsRef.textContent = addLeadingZero(seconds);
  }, 1000);
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
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
