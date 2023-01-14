function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnStart = document.querySelector('[data-start]');
const btnStop = document.querySelector('[data-stop');
const bodyRef = document.querySelector('body');
let start = null;

btnStart.addEventListener('click', go);
btnStop.addEventListener('click', stop);
function go() {
  btnStart.setAttribute('disabled', true);
  btnStop.removeAttribute('disabled');
  start = setInterval(() => {
    bodyRef.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function stop() {
  btnStart.removeAttribute('disabled');
  btnStop.setAttribute('disabled', true);
  clearInterval(start);
}
