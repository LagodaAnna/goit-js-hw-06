function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

let newBoxes = [];
const mainDivEl = document.querySelector('#boxes');

const refs = {
  inputEl: document.querySelector('input'),
  btnCreateEl: document.querySelector('button[data-create]'),
  btnDestroyEl: document.querySelector('button[data-destroy]'),
};

function createBoxes(amount) {
  const arrayOfBoxes = [];
  for (let i = 0; i < amount; i += 1) {
    const newBoxElement = document.createElement('div');
    newBoxElement.style.width = `${i * 10 + 30}px`;
    newBoxElement.style.height = `${i * 10 + 30}px`;
    newBoxElement.style.backgroundColor = getRandomHexColor();
    arrayOfBoxes.push(newBoxElement);
  }
  return arrayOfBoxes;
}

function getQuantityOfBoxes(event) {
  newBoxes = createBoxes(Number(event.currentTarget.value));
  return newBoxes;
}

function onButtonCreateClick() {
  mainDivEl.append(...newBoxes);
}

function destroyBoxes() {
  mainDivEl.innerHTML = '';
  refs.inputEl.value = '';
  newBoxes = [];
}

refs.inputEl.addEventListener('input', getQuantityOfBoxes);
refs.btnCreateEl.addEventListener('click', onButtonCreateClick);
refs.btnDestroyEl.addEventListener('click', destroyBoxes);
