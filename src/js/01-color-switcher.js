const startBtn = document.querySelector('.start');
const stopBtn = document.querySelector('.stop');

startBtn.addEventListener('click', onChangeStart);
stopBtn.addEventListener('click', onChangeStop);

let timerId = null;
stopBtn.disabled = true;

function switchButtons(stopBtn, startBtn) {
  stopBtn.disabled = true;
  startBtn.disabled = false;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
function onChangeStart(event) {
  switchButtons(startBtn, stopBtn);

  timerId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}
function onChangeStop(event) {
  switchButtons(stopBtn, startBtn);

  clearInterval(timerId);
}
