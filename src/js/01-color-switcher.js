const startBtn = document.querySelector('.start');
const stopBtn = document.querySelector('.stop');

startBtn.addEventListener('click', onChangeStart);
stopBtn.addEventListener('click', onChangeStop);

let timerId = null;
stopBtn.disabled = true;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
function onChangeStart(event) {
  startBtn.disabled = true;
  stopBtn.disabled = false;

  timerId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}
function onChangeStop(event) {
  startBtn.disabled = false;
  stopBtn.disabled = true;

  clearInterval(timerId);
}
