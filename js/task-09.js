function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonEl = document.querySelector('.change-color');
const textColorEl = document.querySelector('.color');

function onButtonChangeColorClick() {
  const changeColor = getRandomHexColor();
  document.body.style.backgroundColor = changeColor;
  textColorEl.textContent = changeColor;
}

buttonEl.addEventListener('click', onButtonChangeColorClick);
