const body = document.querySelector('body');
const start = document.querySelector('[data-start]');
const stop = document.querySelector('[data-stop]');

start.addEventListener('click', changeColor);
stop.addEventListener('click', stopChangeColor);

let changeColorId = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

console.log(getRandomHexColor())

function changeColor() {
  start.setAttribute('disabled', 'disabled');

  changeColorId = setInterval(() => {
    const randomColor = getRandomHexColor();
    body.style.backgroundColor = randomColor;
  }, 1000);
}

function stopChangeColor() {
    clearInterval(changeColorId);
    start.removeAttribute('disabled');
}
